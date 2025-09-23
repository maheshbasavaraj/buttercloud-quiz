import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors());
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

app.post('/scenarios/:id/submit', async (req, res) => {
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
    const selectedOption = allowedOptions.options.find((o: any) => o.id === selectedOptionId);

    if (selectedOption) {
      score += selectedOption.score;
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

  const submission = await prisma.submission.create({
    data: {
      userId: 'user1', // Hardcoded for now
      scenarioId: id,
      selections,
      score,
      confidence: 0.9, // Hardcoded for now
      feedback,
    },
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
