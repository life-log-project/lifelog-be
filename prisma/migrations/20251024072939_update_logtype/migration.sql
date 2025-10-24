/*
  Warnings:

  - The values [APPOINTMENT] on the enum `LogType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LogType_new" AS ENUM ('EXERCISE', 'BIO_ACTIVITY', 'PERIOD_CYCLE', 'SELF_IMPROVEMENT', 'SCHEDULE', 'GENERAL');
ALTER TABLE "LogEntry" ALTER COLUMN "systemType" TYPE "LogType_new" USING ("systemType"::text::"LogType_new");
ALTER TYPE "LogType" RENAME TO "LogType_old";
ALTER TYPE "LogType_new" RENAME TO "LogType";
DROP TYPE "public"."LogType_old";
COMMIT;
