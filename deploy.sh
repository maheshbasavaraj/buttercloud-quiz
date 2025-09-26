#!/bin/bash

# Navigate to the project root
cd ~/SWE_QUIZ || { echo "Error: Could not navigate to project directory."; exit 1; }

echo "Pulling latest changes from Git..."
git pull origin main || { echo "Error: Git pull failed."; exit 1; }

echo "Installing backend dependencies..."
cd backend || { echo "Error: Could not navigate to backend directory."; exit 1; }
npm install || { echo "Error: Backend npm install failed."; exit 1; }

echo "Generating Prisma client..."
npx prisma generate || { echo "Error: Prisma client generation failed."; exit 1; }

echo "Building backend..."
npm run build || { echo "Error: Backend build failed."; exit 1; }

echo "Installing frontend dependencies..."
cd ../frontend || { echo "Error: Could not navigate to frontend directory."; exit 1; }
npm install || { echo "Error: Frontend npm install failed."; exit 1; }

echo "Building frontend..."
npm run build || { echo "Error: Frontend build failed."; exit 1; }

echo "Restarting PM2 processes..."
pm2 restart all || { echo "Error: PM2 restart failed."; exit 1; }

echo "Deployment complete!"
