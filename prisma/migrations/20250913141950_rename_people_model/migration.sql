/*
  Warnings:

  - You are about to drop the `participants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."participants" DROP CONSTRAINT "participants_billId_fkey";

-- DropTable
DROP TABLE "public"."participants";

-- CreateTable
CREATE TABLE "public"."persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "billId" INTEGER NOT NULL,
    "individualTipPercentage" INTEGER,
    "individualAmount" DOUBLE PRECISION,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."persons" ADD CONSTRAINT "persons_billId_fkey" FOREIGN KEY ("billId") REFERENCES "public"."bills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
