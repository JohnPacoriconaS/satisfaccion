-- CreateEnum
CREATE TYPE "TriggerMoment" AS ENUM ('LOGIN', 'LOGOUT', 'DURING', 'MANUAL');

-- CreateEnum
CREATE TYPE "FrequencyUnit" AS ENUM ('DAY', 'WEEK', 'MONTH');

-- CreateEnum
CREATE TYPE "EvaluationAction" AS ENUM ('SHOWN', 'SKIPPED', 'SUBMITTED');

-- CreateTable
CREATE TABLE "System" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "baseUrl" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "System_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "id" UUID NOT NULL,
    "systemId" UUID NOT NULL,
    "apiKeyHash" TEXT NOT NULL,
    "allowedOrigins" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" UUID NOT NULL,
    "institutionalCode" TEXT NOT NULL,
    "fullName" TEXT,
    "email" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WidgetConfiguration" (
    "id" UUID NOT NULL,
    "systemId" UUID NOT NULL,
    "triggerMoments" "TriggerMoment"[] DEFAULT ARRAY['LOGIN']::"TriggerMoment"[],
    "frequencyValue" INTEGER NOT NULL DEFAULT 1,
    "frequencyUnit" "FrequencyUnit" NOT NULL DEFAULT 'MONTH',
    "promptDelayMinutes" INTEGER NOT NULL DEFAULT 0,
    "allowSkip" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WidgetConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SatisfactionEvaluation" (
    "id" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "systemId" UUID NOT NULL,
    "rating" INTEGER,
    "comment" TEXT,
    "lastEvaluatedAt" TIMESTAMP(3),
    "nextEligibleAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SatisfactionEvaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationHistory" (
    "id" UUID NOT NULL,
    "evaluationId" UUID NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvaluationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WidgetInteraction" (
    "id" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "systemId" UUID NOT NULL,
    "sessionId" TEXT,
    "action" "EvaluationAction" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WidgetInteraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" UUID NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "roleId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" UUID NOT NULL,
    "adminId" UUID,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "description" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "System_code_key" ON "System"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_systemId_key" ON "Integration"("systemId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_institutionalCode_key" ON "Student"("institutionalCode");

-- CreateIndex
CREATE UNIQUE INDEX "WidgetConfiguration_systemId_key" ON "WidgetConfiguration"("systemId");

-- CreateIndex
CREATE UNIQUE INDEX "SatisfactionEvaluation_studentId_systemId_key" ON "SatisfactionEvaluation"("studentId", "systemId");

-- CreateIndex
CREATE INDEX "WidgetInteraction_studentId_systemId_occurredAt_idx" ON "WidgetInteraction"("studentId", "systemId", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE INDEX "AuditLog_adminId_createdAt_idx" ON "AuditLog"("adminId", "createdAt");

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WidgetConfiguration" ADD CONSTRAINT "WidgetConfiguration_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SatisfactionEvaluation" ADD CONSTRAINT "SatisfactionEvaluation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SatisfactionEvaluation" ADD CONSTRAINT "SatisfactionEvaluation_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationHistory" ADD CONSTRAINT "EvaluationHistory_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "SatisfactionEvaluation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WidgetInteraction" ADD CONSTRAINT "WidgetInteraction_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WidgetInteraction" ADD CONSTRAINT "WidgetInteraction_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminUser" ADD CONSTRAINT "AdminUser_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
