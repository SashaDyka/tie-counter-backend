/*
  Warnings:

  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Participant" DROP CONSTRAINT "Participant_billId_fkey";

-- DropTable
DROP TABLE "public"."Bill";

-- DropTable
DROP TABLE "public"."Participant";

-- CreateTable
CREATE TABLE "public"."bills" (
    "id" SERIAL NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "defaultTipPercentage" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."participants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "billId" INTEGER NOT NULL,
    "individualTipPercentage" INTEGER,
    "individualAmount" DOUBLE PRECISION,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."participants" ADD CONSTRAINT "participants_billId_fkey" FOREIGN KEY ("billId") REFERENCES "public"."bills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
