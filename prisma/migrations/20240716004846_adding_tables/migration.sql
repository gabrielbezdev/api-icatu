/*
  Warnings:

  - Added the required column `squad_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "squad_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Squad" (
    "id" TEXT NOT NULL,
    "camouflage_pattern" VARCHAR(255) NOT NULL,
    "main_armament" VARCHAR(255) NOT NULL,
    "payment_voucher" VARCHAR(255) NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "camouflage_pattern" VARCHAR(255) NOT NULL,
    "main_armament" VARCHAR(255) NOT NULL,
    "payment_voucher" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "operation_id" TEXT NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "editon" VARCHAR(255) NOT NULL,
    "history" VARCHAR(255) NOT NULL,
    "briefing" VARCHAR(255) NOT NULL,
    "armies" VARCHAR(255) NOT NULL,
    "records" VARCHAR(255) NOT NULL,
    "participants" VARCHAR(255) NOT NULL,
    "upshot" VARCHAR(255) NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "operator" VARCHAR(255) NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "rate" VARCHAR(255) NOT NULL,
    "operation_id" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_squad_id_fkey" FOREIGN KEY ("squad_id") REFERENCES "Squad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "Operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "Operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
