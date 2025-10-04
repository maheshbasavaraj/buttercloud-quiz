import 'dotenv/config'; // Import dotenv to load environment variables from .env file
import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { authenticateToken } from './middleware/auth'; // Add this import

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors({ origin: ['http://maheshbasavaraj.ddnsfree.com', 'http://swebenchquiz.ddnsfree.com', 'http://localhost:3000'] }));
app.use(express.json());

app.get('/scenarios', async (req, res) => {
  const scenarios = await prisma.scenario.findMany({
    include: {
      components: true,
    },
  });
  console.log('Fetched scenarios:', scenarios);
  res.json(scenarios);
});

app.get('/scenarios/:id', async (req, res) => {
  const { id } = req.params;
  const scenario = await prisma.scenario.findUnique({
    where: { id },
    include: {
      components: true,
    },
  });
  res.json(scenario);
});

// Middleware to simulate user authentication in development
const devAuthMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (req as any).user = { userId: 'clx123abcde' }; // Mock user with a fake ID
  next();
};

// Use authentication middleware only in production
const authMiddleware = process.env.NODE_ENV === 'production' ? authenticateToken : devAuthMiddleware;

app.post('/scenarios/:id/submit', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { selections } = req.body;

  const scenario = await prisma.scenario.findUnique({
    where: { id },
    include: {
      components: true,
    },
  });

  if (!scenario) {
    return res.status(404).json({ error: 'Scenario not found' });
  }

  let score = 0;
  const feedback: any = {};

  for (const component of scenario.components) {
    const selectedOptionId = selections[component.componentType];
    const allowedOptions = component.allowedOptions as any;
    const selectedOption = allowedOptions?.options?.find((o: any) => o.id === selectedOptionId);

    if (selectedOption) {
      score += selectedOption.score || 0;
      feedback[component.componentType] = {
        justification: selectedOption.justification,
        rating: selectedOption.rating,
        selectedOptionLabel: selectedOption.label,
      };
    } else {
      feedback[component.componentType] = {
        justification: 'No option was selected for this question.',
        rating: 'Poor',
        selectedOptionLabel: 'None',
      };
    }
  }

  const authenticatedUserId = (req as any).user.userId; // Get userId from authenticated user

  const submission = await prisma.submission.create({
    data: {
      userId: authenticatedUserId,
      scenarioId: id,
      selections,
      score,
      confidence: 0.9, // Hardcoded for now
      feedback,
    },
  });

  // Update user's overall score
  await prisma.user.update({
    where: { id: authenticatedUserId },
    data: { overallScore: { increment: score } },
  });

  res.json({ score, feedback, submission });
});

app.get('/submissions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const submission = await prisma.submission.findUnique({
      where: { id },
    });

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    const scenario = await prisma.scenario.findUnique({
      where: { id: submission.scenarioId },
      include: {
        components: true,
      },
    });

    if (!scenario) {
      return res.status(404).json({ error: 'Associated scenario not found' });
    }

    res.json({ submission, scenario });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
});

app.get('/leaderboard', async (req, res) => {
  const leaderboard = await prisma.user.findMany({
    orderBy: {
      overallScore: 'desc',
    },
    select: {
      id: true,
      name: true,
      overallScore: true,
    },
  });
  res.json(leaderboard);
});

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const JWT_SECRET = process.env.JWT_SECRET;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

app.post('/auth/google', async (req, res) => {
  const { idToken } = req.body; // Google ID token from frontend

  if (!idToken) {
    return res.status(400).json({ error: 'ID token is required' });
  }

  try {
    const ticket = await client.verifyIdToken({
        idToken,
        audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(401).json({ error: 'Invalid ID token payload' });
    }

    const googleId = payload['sub']; // Unique Google user ID
    const email = payload['email']; // Assuming you add email to User model
    const name = payload['name'];

    let user = await prisma.user.findUnique({ where: { googleId } });

    if (!user) {
      // Create new user if not found
      user = await prisma.user.create({
        data: {
          googleId,
          name: name || 'Google User',
          role: 'player', // Default role
          skillTags: 'general',
          overallScore: 0,
          // Add email to User model if you want to store it
          // email: email,
        },
      });
    }

    // Generate your application's JWT
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    const appToken = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token: appToken, user: { id: user.id, name: user.name, role: user.role } });

  } catch (error) {
    console.error('Google authentication error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
