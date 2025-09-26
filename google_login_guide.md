# Google ID Login Implementation Guide

This guide outlines the steps to implement Google ID login (OAuth) for user authentication in your ButterCloud Quiz application.

## Core Concepts

*   **OAuth 2.0:** Google ID login is based on the OAuth 2.0 protocol.
*   **Google API Console:** You'll need to set up a project in the Google API Console to get OAuth client IDs and secrets.
*   **Frontend (Client-side):** The frontend will initiate the Google login flow, receive an ID token, and send it to the backend.
*   **Backend (Server-side):** The backend will verify the ID token with Google, extract user information, and either create a new user or log in an existing one. It will then issue its own session token (e.g., JWT) to the frontend.

## Step-by-Step Implementation Plan

### 1. Google API Console Setup (Manual Step)

This step needs to be performed manually in your Google Cloud Console.

1.  Go to the [Google API Console](https://console.developers.google.com/).
2.  **Create a new project** or select an existing one.
3.  **Enable APIs and Services:** Search for and enable the **Google People API** (or **Google Sign-In API**).
4.  **Create Credentials:**
    *   Navigate to **Credentials** in the left sidebar.
    *   Click **+ CREATE CREDENTIALS** and choose **OAuth client ID**.
    *   Select **Web application** as the Application type.
    *   Give it a descriptive name (e.g., "ButterCloud Quiz Web Client").
    *   **Authorized JavaScript origins:** Add the URL(s) where your frontend application is hosted. For local development, this will typically be `http://localhost:3000`.
    *   **Authorized redirect URIs:** This is where Google sends the user's browser after successful authentication. For a typical client-side flow, this might be the same as your origin, or a specific callback path. For a server-side flow, it will be an endpoint on your backend.
    *   Click **CREATE**.
    *   You will be presented with your **Client ID** and **Client Secret**. **Copy these immediately and store them securely.** You will need them for your frontend and backend configurations.

### 2. Database Schema Modification (Prisma)

We need to add a field to your `User` model to store the unique Google ID, which will be used to identify returning Google users.

**Proposed `schema.prisma` modification:**

Add `googleId` to the `User` model. This field should be optional (`?`) and unique (`@unique`).

```prisma
// backend/prisma/schema.prisma
model User {
  id           String   @id @default(cuid())
  name         String
  role         String
  skillTags    String
  stats        Json?
  overallScore Float    @default(0)
  submissions  Submission[]
  googleId     String?  @unique // New field for Google ID
}
```

**After modifying `schema.prisma`:**

1.  **Generate new Prisma client:**
    ```bash
    cd buttercloud-quiz/backend
    npx prisma generate
    ```
2.  **Run a database migration:**
    ```bash
    cd buttercloud-quiz/backend
    npx prisma migrate dev --name add_google_id_to_user
    ```

### 3. Backend Changes

Your backend will be responsible for verifying the Google ID token and managing user sessions.

1.  **Install Libraries:**
    ```bash
    cd buttercloud-quiz/backend
    npm install google-auth-library jsonwebtoken
    npm install --save-dev @types/jsonwebtoken
    ```
    *   `google-auth-library`: To verify Google ID tokens.
    *   `jsonwebtoken`: To create and verify your application's session tokens (JWTs).

2.  **Authentication Endpoint (e.g., `backend/src/index.ts` or a new auth controller):**

    Create a new API endpoint (e.g., `POST /auth/google`) that:

    *   Receives the Google ID token from the frontend in the request body.
    *   Verifies the ID token with Google's API using `google-auth-library` and your Google Client ID.
    *   Extracts user information (email, name, Google ID) from the verified token.
    *   Checks if a user with this `googleId` already exists in your `User` database:
        *   If not, create a new `User` entry with the Google ID and other relevant information. You'll need to decide on a default `role` and `skillTags` for new users.
        *   If yes, retrieve the existing `User`.
    *   Generates a session token (e.g., a JWT) for your application. This token will contain user-specific information (like `userId`, `role`) and will be used for subsequent authenticated requests.
    *   Sends the session token back to the frontend.

    **Example snippet for `backend/src/index.ts` (conceptual):**

    ```typescript
    // ... imports
    import { OAuth2Client } from 'google-auth-library';
    import jwt from 'jsonwebtoken';

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // Get from .env
    const JWT_SECRET = process.env.JWT_SECRET; // Get from .env

    const client = new OAuth2Client(GOOGLE_CLIENT_ID);

    app.post('/auth/google', async (req, res) => {
      const { idToken } = req.body; // Google ID token from frontend

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
        const email = payload['email'];
        const name = payload['name'];

        let user = await prisma.user.findUnique({ where: { googleId } });

        if (!user) {
          // Create new user if not found
          user = await prisma.user.create({
            data: {
              googleId,
              email, // Assuming you add email to User model
              name: name || 'Google User',
              role: 'player', // Default role
              skillTags: 'general',
              overallScore: 0,
            },
          });
        }

        // Generate your application's JWT
        const appToken = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token: appToken, user: { id: user.id, name: user.name, role: user.role } });

      } catch (error) {
        console.error('Google authentication error:', error);
        res.status(401).json({ error: 'Authentication failed' });
      }
    });
    ```

3.  **Middleware for Protected Routes:**

    Implement middleware to protect routes that require authentication. This middleware will verify the session token sent by the frontend on subsequent requests.

    ```typescript
    // backend/src/middleware/auth.ts (example)
    import { Request, Response, NextFunction } from 'express';
    import jwt from 'jsonwebtoken';

    const JWT_SECRET = process.env.JWT_SECRET; // Get from .env

    export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (token == null) return res.sendStatus(401); // No token

      jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) return res.sendStatus(403); // Invalid token
        (req as any).user = user; // Attach user payload to request
        next();
      });
    };

    // In index.ts, apply to protected routes:
    // app.get('/protected-data', authenticateToken, async (req, res) => { ... });
    ```

### 4. Frontend Changes

Your frontend will handle the Google login UI and manage the session token.

1.  **Install Libraries:**
    ```bash
    cd buttercloud-quiz/frontend
    npm install @react-oauth/google
    ```

2.  **Google OAuth Provider Setup:** Wrap your application with `GoogleOAuthProvider`.

    ```typescript
    // frontend/src/app/layout.tsx (example)
    import { GoogleOAuthProvider } from '@react-oauth/google';

    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID; // Get from .env.local

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <html lang="en">
            <body>{children}</body>
          </html>
        </GoogleOAuthProvider>
      );
    }
    ```

3.  **Login Button and Flow (e.g., `frontend/src/app/login/page.tsx` or a component):**

    Use the `useGoogleLogin` hook to initiate the login flow.

    ```typescript
    // frontend/src/app/login/page.tsx (example)
    'use client';

    import { useGoogleLogin } from '@react-oauth/google';
    import { useRouter } from 'next/navigation';

    export default function LoginPage() {
      const router = useRouter();

      const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          // Send the Google ID token to your backend
          const res = await fetch('http://localhost:3001/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: tokenResponse.access_token }), // Use access_token or id_token depending on flow
          });

          if (res.ok) {
            const data = await res.json();
            localStorage.setItem('appToken', data.token); // Store your app's JWT
            // Optionally store user info: localStorage.setItem('user', JSON.stringify(data.user));
            router.push('/scenarios'); // Redirect to a protected page
          } else {
            console.error('Backend authentication failed');
          }
        },
        onError: (error) => console.log('Login Failed:', error),
      });

      return (
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <button onClick={() => login()} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign in with Google
          </button>
        </main>
      );
    }
    ```

4.  **Logout Mechanism:**

    Clear the stored session token.

    ```typescript
    // Example logout function
    const handleLogout = () => {
      localStorage.removeItem('appToken');
      // Optionally clear user info: localStorage.removeItem('user');
      // Redirect to login page or home
      router.push('/login');
    };
    ```

5.  **Protected Routes/API Calls:**

    Include your application's session token in the headers of requests to protected backend routes.

    ```typescript
    // Example of an authenticated fetch
    const getProtectedData = async () => {
      const token = localStorage.getItem('appToken');
      if (!token) {
        // Handle not authenticated
        return;
      }
      const res = await fetch('http://localhost:3001/protected-data', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      // ... handle response
    };
    ```

## Discussion Points

*   **Replacing Hardcoded User:** Do you want to replace the current hardcoded `userId: 'user1'` with actual Google authenticated users, or have both? For a pilot, replacing it is simpler.
*   **Role Assignment:** How will roles (`player`, `admin`) be assigned to Google users upon their first login?
*   **Session Management:** Do you prefer JWTs (as suggested) or traditional session cookies for managing user sessions after Google authentication?
*   **Error Handling and UI Feedback:** Implement robust error handling and provide clear UI feedback to the user during the login process.
*   **Environment Variables:** Remember to set `GOOGLE_CLIENT_ID` and `JWT_SECRET` in your `.env` files (and `NEXT_PUBLIC_GOOGLE_CLIENT_ID` for the frontend).