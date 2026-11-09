
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { IntegrationsService } from '../integrations.service.js';

@Injectable()
export class IntegrationApiKeyGuard implements CanActivate {
  constructor(
    private readonly integrationsService: IntegrationsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['x-api-key'];

    if (typeof apiKey !== 'string' || !apiKey) {
      throw new UnauthorizedException('API Key requerida');
    }

    const integration =
      await this.integrationsService.validateApiKey(apiKey);

    if (!integration) {
      throw new UnauthorizedException(
        'API Key inválida o integración inactiva',
      );
    }

    request.integration = integration;

    return true;
  }
}
