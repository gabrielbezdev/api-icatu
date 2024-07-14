-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "age" INTEGER NOT NULL,
    "contact" INTEGER NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "blood_type" VARCHAR(255) NOT NULL,
    "allergies" VARCHAR(255) NOT NULL,
    "medications_in_use" VARCHAR(255) NOT NULL,
    "emergency_contact_name" VARCHAR(255) NOT NULL,
    "emergency_contact" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
