/*
  Warnings:

  - You are about to drop the column `otp_create_date` on the `User` table. All the data in the column will be lost.
  - Added the required column `otp_expire_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "is_validate" BOOLEAN NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "otp" INTEGER NOT NULL,
    "otp_expire_date" DATETIME NOT NULL
);
INSERT INTO "new_User" ("create_date", "id", "is_validate", "name", "otp", "password", "phone") SELECT "create_date", "id", "is_validate", "name", "otp", "password", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
