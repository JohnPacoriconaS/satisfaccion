import { Module } from '@nestjs/common';
import { IntegrationsController } from './integrations.controller.js';
import { IntegrationsService } from './integrations.service.js';
import { IntegrationApiKeyGuard } from './guards/integration-api-key.guard.js';
import { AdminAuthModule } from '../admin-auth/admin-auth.module.js';

@Module({
  imports: [AdminAuthModule],
  controllers: [IntegrationsController],
  providers: [
    IntegrationsService,
    IntegrationApiKeyGuard,
  ],
  exports: [
    IntegrationsService,
    IntegrationApiKeyGuard,
  ],
})
export class IntegrationsModule {}