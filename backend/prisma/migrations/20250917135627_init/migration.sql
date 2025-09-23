-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "skillTags" TEXT NOT NULL,
    "stats" JSONB
);

-- CreateTable
CREATE TABLE "Scenario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "domainTags" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ScenarioComponent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scenarioId" TEXT NOT NULL,
    "componentType" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "allowedOptions" JSONB NOT NULL,
    CONSTRAINT "ScenarioComponent_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "Scenario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "componentType" TEXT NOT NULL,
    "prosCons" JSONB NOT NULL,
    "scoreIfSelected" REAL NOT NULL,
    "compatibilityTags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "scenarioId" TEXT NOT NULL,
    "selections" JSONB NOT NULL,
    "score" REAL NOT NULL,
    "confidence" REAL NOT NULL,
    "feedback" JSONB
);

-- CreateTable
CREATE TABLE "Explanation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scenarioId" TEXT NOT NULL,
    "component" TEXT NOT NULL,
    "correctOptions" JSONB NOT NULL,
    "rationaleText" TEXT NOT NULL
);
