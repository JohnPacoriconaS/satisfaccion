/*
  Warnings:

  - A unique constraint covering the columns `[apiKeyHash]` on the table `Integration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Integration_apiKeyHash_key" ON "Integration"("apiKeyHash");
