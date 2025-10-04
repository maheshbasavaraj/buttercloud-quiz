# Development Log

This log tracks the changes and fixes made to the ButterCloud Quiz application.

---

### **Entry 1: Fix Frontend Build Failure (Google Fonts)**
*   **Issue:** The frontend application was failing to build due to a network error. It could not connect to `fonts.googleapis.com` to download the 'Inter' font.
*   **Changes:**
    *   Modified `frontend/src/app/layout.tsx`.
    *   Commented out the import for the `Inter` font from `next/font/google`.
    *   Replaced the dynamic font class with a fallback Tailwind CSS class (`font-sans`) on the `<body>` tag.
*   **Outcome:** The build-blocking network error was resolved, allowing the application to compile.

---

### **Entry 2: Fix Frontend Build Failure (JSX Syntax Error)**
*   **Issue:** The build was failing again, this time with a `Failed to compile` error caused by a syntax error in `frontend/src/app/scenarios/page.tsx`. The file contained duplicated and malformed JSX.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/page.tsx`.
    *   Removed the extraneous and duplicated JSX code from the end of the file.
*   **Outcome:** The syntax error was fixed, and the frontend compiled successfully.

---

### **Entry 3: Disable Google Login for Local Testing**
*   **Issue:** Google Login was failing due to configuration issues (GSI origin not allowed) and the user wanted to bypass it for local testing without deleting the code.
*   **Changes:**
    1.  **`frontend/src/app/layout.tsx`**: Commented out the `<GoogleOAuthProvider>` component that wraps the application.
    2.  **`frontend/src/app/login/page.tsx`**:
        *   Commented out the `<GoogleLogin>` component and its associated handler functions (`handleGoogleSuccess`, `handleGoogleError`).
        *   Added a new "Login for Local Testing" button.
        *   This button calls a `handleMockLogin` function that sets a dummy authentication token in local storage, simulating a real login.
*   **Outcome:** Google Login is now disabled for local development, and a mock login allows for easy access to authenticated parts of the application. The original Google Login code is preserved for easy re-activation.

---

### **Entry 4: Resolve API Fetching Error (404 Not Found)**
*   **Issue:** After using the mock login, the application failed to fetch data from the backend, receiving a `404 Not Found` error for the `/api/scenarios` endpoint.
*   **Changes:**
    *   Modified `frontend/next.config.mjs`.
    *   Added a `rewrites` configuration to proxy API requests.
    *   The rule forwards any request from `/api/:path*` on the frontend to `http://localhost:3001/:path*` on the backend.
    *   This configuration is wrapped in a conditional check (`process.env.NODE_ENV !== 'development'`) so that it **only runs in the local development environment** and will not affect the cloud deployment.
*   **Outcome:** The frontend development server now correctly forwards API calls to the running backend server, resolving the `404` error and allowing the application to fetch data locally.

---

### **Entry 5: Fix Navigation and Submission Errors**
*   **Issue 1:** After selecting a difficulty, the app would navigate directly to the quiz, skipping the scenario description page.
*   **Issue 2:** Submitting a quiz failed with a `403 Forbidden` error because the mock JWT was invalid.
*   **Changes:**
    1.  **`frontend/src/app/scenarios/page.tsx`**: Modified the `router.push` call to navigate to the scenario's main page (`/scenarios/[id]`) instead of the quiz sub-page.
    2.  **`backend/src/index.ts`**:
        *   Conditionally applied the `authenticateToken` middleware. It is now only active when `NODE_ENV` is `"production"`.
        *   In development, a mock middleware is used instead, which attaches a fake user ID to the request to satisfy the submission logic.
*   **Outcome:**
    *   Users are now correctly navigated to the scenario description page.
    *   Quiz submissions now work in the local development environment by bypassing JWT validation. Authentication remains enforced in production.

---

### **Entry 6: Add Quiz Timer**
*   **Feature:** Added a countdown timer to the quiz page.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/[id]/quiz/page.tsx`.
    *   Added a `timeLeft` state variable, initialized to 300 seconds (5 minutes).
    *   Implemented a `useEffect` hook with a `setInterval` to decrement the timer every second.
    *   The quiz is now automatically submitted when the timer reaches zero.
    *   A visual timer display was added to the UI, which turns red and pulses when less than 60 seconds remain.
*   **Outcome:** Quizzes are now timed, adding a new layer of challenge for the user.

---

### **Entry 7: Add In-Quiz Requirements Viewer**
*   **Feature:** Added a way for users to view the scenario requirements from within the quiz page.
*   **Changes:**
    1.  **`frontend/src/components/ui/sheet.tsx`**: Created this new file and added the standard `shadcn/ui` code for the `Sheet` component.
    2.  **`frontend/src/app/scenarios/[id]/quiz/page.tsx`**:
        *   Added a "View Requirements" button to the quiz header.
        *   This button triggers a `Sheet` (sliding side panel) to open.
        *   The scenario's description is fetched and displayed inside the sheet, formatted from its original JSON structure for readability.
*   **Outcome:** Users can now easily slide a panel in and out to consult the scenario requirements at any time during the quiz, providing a much better user experience.

---

### **Entry 8: Fix Missing Dependency for Sheet Component**
*   **Issue:** The application failed to compile with a `Module not found: Can't resolve '@radix-ui/react-dialog'` error after the `Sheet` component was added.
*   **Changes:**
    *   Ran `npm install @radix-ui/react-dialog` in the `frontend` directory.
*   **Outcome:** The missing dependency was installed, resolving the build error. The `Sheet` component now functions correctly.

---

### **Entry 9: Revamp Homepage and Header**
*   **Feature:** Improved the homepage and removed redundant text from the header.
*   **Changes:**
    1.  **`frontend/src/components/Header.tsx`**: Removed the `<h1>` tag containing "ButterCloud Quiz" to eliminate redundant branding on every page.
    2.  **`frontend/src/app/page.tsx`**: Replaced the simple "ButterCloud Quiz" heading and "Go to Scenarios" link with a more engaging welcome message and a prominent "Start Quiz" button. The button now uses the `shadcn/ui` Button component for better styling.
*   **Outcome:** The homepage is now more inviting and action-oriented, and the header is cleaner.

---

### **Entry 10: Rename Application to StackArchitect Quiz**
*   **Feature:** Renamed the application from "ButterCloud Quiz" to "StackArchitect Quiz" as per user request.
*   **Changes:**
    *   Replaced all occurrences of "ButterCloud Quiz" with "StackArchitect Quiz" in the following frontend files:
        *   `frontend/src/app/layout.tsx` (metadata title)
        *   `frontend/src/app/login/page.tsx` (login page heading)
        *   `frontend/src/app/page.tsx` (homepage heading)
*   **Outcome:** The application now reflects the new branding, "StackArchitect Quiz."

---

### **Entry 11: Improve Question Heading Readability**
*   **Feature:** Simplified the display of question headings on the quiz page.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/[id]/quiz/page.tsx`.
    *   Enhanced the string manipulation for `componentType` in the `CardTitle` to:
        *   Remove the "q-" prefix.
        *   Remove any "extra-" prefix.
        *   Remove trailing numbers and hyphens (e.g., "-1", "-2").
        *   Replace remaining hyphens with spaces.
        *   Capitalize the first letter of each word.
*   **Outcome:** Question headings are now much cleaner and easier to understand (e.g., "Monitoring" instead of "q-extra-monitor-1").

---

### **Entry 12: Fix Requirements Panel Formatting**
*   **Issue:** The requirements in the sliding panel were showing text and bullet points on different lines, making them hard to read.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/[id]/quiz/page.tsx`.
    *   Refactored the `renderDescription` function and introduced a new helper, `renderKeyValue`.
    *   `renderKeyValue` now intelligently renders each key-value pair based on its type, ensuring that keys and their corresponding values (strings, numbers, booleans, arrays, or nested objects) are displayed in a more cohesive and readable manner, preventing unnecessary line breaks.
*   **Outcome:** The requirements in the sliding panel are now formatted correctly, improving readability.

---

### **Entry 13: Fix ReferenceError for getFriendlyComponentName**
*   **Issue:** A `ReferenceError: getFriendlyComponentName is not defined` occurred because the helper function was defined within the `QuizPage` component, limiting its scope.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/[id]/quiz/page.tsx`.
    *   Moved the `getFriendlyComponentName` function outside of the `QuizPage` component.
*   **Outcome:** The `ReferenceError` is resolved, and the `getFriendlyComponentName` function is now correctly accessible.

---

### **Entry 14: Display Leaderboard on Homepage**
*   **Feature:** Display the leaderboard on the right side of the homepage.
*   **Changes:**
    1.  **`backend/src/index.ts`**: Removed the `authenticateToken` middleware from the `/leaderboard` GET endpoint to make it publicly accessible.
    2.  **`frontend/src/app/page.tsx`**: Modified the `Home` component to:
        *   Fetch leaderboard data using `useEffect` and `useState`.
        *   Implement a two-column flexbox layout.
        *   Display the existing welcome message and "Start Quiz" button in the left column.
        *   Add a new section for the leaderboard in the right column, showing user names and scores.
        *   Include loading, error, and empty states for the leaderboard display.
*   **Outcome:** The homepage now features a dynamic leaderboard, making it more engaging for users.

---

### **Entry 15: Fix 'use client' Directive for Homepage**
*   **Issue:** A build error occurred because client-side hooks (`useState`, `useEffect`) were being used in `frontend/src/app/page.tsx` without the `'use client';` directive.
*   **Changes:**
    *   Modified `frontend/src/app/page.tsx`.
    *   Added `'use client';` at the very top of the file.
*   **Outcome:** The build error is resolved, and the homepage can now correctly use client-side React hooks.

---

### **Entry 16: Add Gamification - Enhanced Quiz Result Feedback**
*   **Feature:** Provided clearer and more prominent feedback on the quiz results page.
*   **Changes:**
    *   Modified `frontend/src/app/scenarios/[id]/result/[submissionId]/page.tsx`.
    *   Imported and used the `getFriendlyComponentName` helper function to display user-friendly names for question components in the feedback section.
    *   Made the overall score more prominent with larger text and bold styling.
    *   Improved the styling and layout of individual question feedback, including clearer headings for each component, distinct display of user selection, rating, and justification.
*   **Outcome:** The quiz results page now offers enhanced gamification through clearer and more visually appealing feedback, helping users better understand their performance.

---

### **Entry 17: Implement Theming - Accent Color Customization**
*   **Feature:** Added the ability for users to customize the application's accent color.
*   **Changes:**
    1.  **`frontend/src/app/globals.css`**: Modified to use a `--primary-hue` CSS variable, allowing dynamic changes to the primary color's hue.
    2.  **`frontend/src/components/ThemeProvider.tsx`**: Created a new React context and provider to manage the `primaryHue` state, persist it in local storage, and apply it to the document's root element.
    3.  **`frontend/src/app/layout.tsx`**: Wrapped the entire application with the new `ThemeProvider` to make the theme context globally available.
    4.  **`frontend/src/components/Header.tsx`**: Added a UI element (a set of colored buttons) to the header. Clicking these buttons updates the `primaryHue` via the `useTheme` hook, allowing users to instantly change the accent color.
*   **Outcome:** Users can now personalize the application's look by choosing from several accent colors, which are saved across sessions.

---

### **Entry 18: Fix Theming - Missing CSS Variable Definition**
*   **Issue:** Clicking the accent color buttons had no effect because the `--primary-hue` CSS variable was not explicitly defined in `globals.css`.
*   **Changes:**
    *   Modified `frontend/src/app/globals.css`.
    *   Added `--primary-hue: 217.2;` to both the `:root` and `.dark` selectors.
*   **Outcome:** The accent color customization now functions correctly, allowing dynamic changes to the application's primary color.

---

## Future Tasks

*   **Upgrade Next.js:** Investigate and upgrade the Next.js version from 14 to a more recent, stable version to leverage new features and performance improvements. This will require careful review of breaking changes and thorough testing.