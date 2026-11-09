import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IntegrationsService } from '../integrations.service.js';
export declare class IntegrationApiKeyGuard implements CanActivate {
    private readonly integrationsService;
    constructor(integrationsService: IntegrationsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
