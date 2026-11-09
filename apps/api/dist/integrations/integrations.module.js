var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { IntegrationsController } from './integrations.controller.js';
import { IntegrationsService } from './integrations.service.js';
import { IntegrationApiKeyGuard } from './guards/integration-api-key.guard.js';
import { AdminAuthModule } from '../admin-auth/admin-auth.module.js';
let IntegrationsModule = class IntegrationsModule {
};
IntegrationsModule = __decorate([
    Module({
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
], IntegrationsModule);
export { IntegrationsModule };
//# sourceMappingURL=integrations.module.js.map