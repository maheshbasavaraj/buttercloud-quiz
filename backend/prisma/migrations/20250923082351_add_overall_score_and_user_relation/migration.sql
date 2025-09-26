-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Submission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "scenarioId" TEXT NOT NULL,
    "selections" JSONB NOT NULL,
    "score" REAL NOT NULL,
    "confidence" REAL NOT NULL,
    "feedback" JSONB,
    CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Submission" ("confidence", "feedback", "id", "scenarioId", "score", "selections", "userId") SELECT "confidence", "feedback", "id", "scenarioId", "score", "selections", "userId" FROM "Submission";
DROP TABLE "Submission";
ALTER TABLE "new_Submission" RENAME TO "Submission";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "skillTags" TEXT NOT NULL,
    "stats" JSONB,
    "overallScore" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("id", "name", "role", "skillTags", "stats") SELECT "id", "name", "role", "skillTags", "stats" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
