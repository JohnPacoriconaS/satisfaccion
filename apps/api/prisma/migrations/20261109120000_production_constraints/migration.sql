CREATE INDEX "SatisfactionEvaluation_systemId_idx"
  ON "SatisfactionEvaluation"("systemId");

CREATE INDEX "EvaluationHistory_evaluationId_answeredAt_idx"
  ON "EvaluationHistory"("evaluationId", "answeredAt");

CREATE INDEX "EvaluationHistory_evaluationId_rating_idx"
  ON "EvaluationHistory"("evaluationId", "rating");

CREATE INDEX "AuditLog_createdAt_idx"
  ON "AuditLog"("createdAt");

CREATE UNIQUE INDEX "WidgetInteraction_studentId_systemId_sessionId_action_key"
  ON "WidgetInteraction"("studentId", "systemId", "sessionId", "action");

ALTER TABLE "SatisfactionEvaluation"
  ADD CONSTRAINT "SatisfactionEvaluation_rating_range_check"
  CHECK ("rating" IS NULL OR ("rating" BETWEEN 1 AND 5)) NOT VALID;

ALTER TABLE "EvaluationHistory"
  ADD CONSTRAINT "EvaluationHistory_rating_range_check"
  CHECK ("rating" BETWEEN 1 AND 5) NOT VALID;

ALTER TABLE "WidgetConfiguration"
  ADD CONSTRAINT "WidgetConfiguration_frequency_positive_check"
  CHECK ("frequencyValue" >= 1) NOT VALID,
  ADD CONSTRAINT "WidgetConfiguration_prompt_delay_nonnegative_check"
  CHECK ("promptDelayMinutes" >= 0) NOT VALID;

ALTER TABLE "SatisfactionEvaluation"
  VALIDATE CONSTRAINT "SatisfactionEvaluation_rating_range_check";
ALTER TABLE "EvaluationHistory"
  VALIDATE CONSTRAINT "EvaluationHistory_rating_range_check";
ALTER TABLE "WidgetConfiguration"
  VALIDATE CONSTRAINT "WidgetConfiguration_frequency_positive_check";
ALTER TABLE "WidgetConfiguration"
  VALIDATE CONSTRAINT "WidgetConfiguration_prompt_delay_nonnegative_check";
