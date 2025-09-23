# ButterCloud Quiz

This project is an interactive platform that gives realistic project requirements (scenarios) and challenges users to select the best tech-stack and architecture choices across frontend, backend, DB, infra, and patterns — then scores and teaches them why the choices are right/wrong.

## Project Structure

- `frontend`: A Next.js application for the user interface.
- `backend`: A Node.js with Express and Prisma for the API and database.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd buttercloud-quiz
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Database

This project uses a SQLite database. The database will be automatically created when you run the first migration.

1.  **Run database migrations:**

    ```bash
    cd ../backend
    npx prisma migrate dev --name init
    ```

2.  **Seed the database with initial data:**

    ```bash
    npm run seed
    ```

### Running the application

1.  **Start the backend server:**

    ```bash
    cd ../backend
    npm run dev
    ```

    The backend server will be running on `http://localhost:3001`.

2.  **Start the frontend server:**

    ```bash
    cd ../frontend
    npm run dev
    ```

    The frontend server will be running on `http://localhost:3000`.

Open `http://localhost:3000` in your browser to see the application.

