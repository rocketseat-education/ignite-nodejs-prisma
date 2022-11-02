/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fk_id_teacher]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_teacher` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teacher" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teacher_key" ON "courses"("fk_id_teacher");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
