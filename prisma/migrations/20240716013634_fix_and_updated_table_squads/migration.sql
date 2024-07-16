/*
  Warnings:

  - You are about to drop the column `camouflage_pattern` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `main_armament` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `payment_voucher` on the `Squad` table. All the data in the column will be lost.
  - Added the required column `acronym` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creation_date` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Squad` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_password_key";

-- AlterTable
ALTER TABLE "Squad" DROP COLUMN "camouflage_pattern",
DROP COLUMN "main_armament",
DROP COLUMN "payment_voucher",
ADD COLUMN     "acronym" VARCHAR(255) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creation_date" VARCHAR(255) NOT NULL,
ADD COLUMN     "history" VARCHAR(5000) NOT NULL,
ADD COLUMN     "location" VARCHAR(255) NOT NULL,
ADD COLUMN     "members" VARCHAR(5000) NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL;
