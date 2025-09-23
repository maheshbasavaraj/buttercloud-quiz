/*
  Warnings:

  - You are about to alter the column `description` on the `Scenario` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scenario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "difficulty" TEXT NOT NULL,
    "domainTags" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL
);
INSERT INTO "new_Scenario" ("creatorId", "description", "difficulty", "domainTags", "id", "title") SELECT "creatorId", "description", "difficulty", "domainTags", "id", "title" FROM "Scenario";
DROP TABLE "Scenario";
ALTER TABLE "new_Scenario" RENAME TO "Scenario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
