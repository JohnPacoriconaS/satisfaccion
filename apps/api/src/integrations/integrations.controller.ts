import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Patch,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';

import {
  RegisterStudentSchema,
  CreateIntegrationSchema,
  UpdateIntegrationSchema,
  PaginationQuerySchema,
} from '@satisfaccion/schemas';

import { JwtService } from '@nestjs/jwt';
import { IntegrationsService } from './integrations.service.js';
import { IntegrationApiKeyGuard } from './guards/integration-api-key.guard.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';

@Controller('integrations')
export class IntegrationsController {
  constructor(
    private readonly integrationsService: IntegrationsService,
    private readonly jwtService: JwtService,
  ) {}

  // RUTAS ADMINISTRATIVAS

  @Get()
  @UseGuards(AdminJwtGuard)
  findAll(@Query() query: unknown) {
    const result = PaginationQuerySchema.safeParse(query);
    if (!result.success) throw new BadRequestException(result.error.issues);
    return this.integrationsService.findAll(result.data);
  }
  @Post(':systemId')
  @UseGuards(AdminJwtGuard)
  create(
    @Param('systemId', ParseUUIDPipe) systemId: string,
    @Body() body: unknown,
    @Req() request: any,
  ) {
    const result = CreateIntegrationSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.integrationsService.create(
      systemId,
      result.data,
      request.admin.id,
    );
  }

  // RUTAS PARA SISTEMAS EXTERNOS

  @Get('verify')
  @UseGuards(IntegrationApiKeyGuard)
  verify(@Req() request: any) {
    return {
      message: 'Integración autenticada correctamente',
      system: {
        id: request.integration.system.id,
        name: request.integration.system.name,
        code: request.integration.system.code,
      },
    };
  }

  @Post('token')
  @UseGuards(IntegrationApiKeyGuard)
  async createStudentToken(@Req() request: any, @Body() body: unknown) {
    const result = RegisterStudentSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    const integration = request.integration;

    const student = await this.integrationsService.registerStudent(result.data);

    const accessToken = await this.jwtService.signAsync(
      {
        sub: student.id,
        integrationId: integration.id,
        systemId: integration.systemId,
      },
      {
        audience: 'student',
        algorithm: 'HS256',
      },
    );

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 300,
      student: {
        id: student.id,
        institutionalCode: student.institutionalCode,
      },
    };
  }
  @Patch(':id/deactivate')
  @UseGuards(AdminJwtGuard)
  deactivate(@Param('id', ParseUUIDPipe) id: string, @Req() request: any) {
    return this.integrationsService.deactivate(id, request.admin.id);
  }

  @Patch(':id/activate')
  @UseGuards(AdminJwtGuard)
  activate(@Param('id', ParseUUIDPipe) id: string, @Req() request: any) {
    return this.integrationsService.activate(id, request.admin.id);
  }
  @Patch(':id')
  @UseGuards(AdminJwtGuard)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: unknown,
    @Req() request: any,
  ) {
    const result = UpdateIntegrationSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.integrationsService.update(id, result.data, request.admin.id);
  }

  @Patch(':id/rotate-key')
  @UseGuards(AdminJwtGuard)
  rotateApiKey(@Param('id', ParseUUIDPipe) id: string, @Req() request: any) {
    return this.integrationsService.rotateApiKey(id, request.admin.id);
  }
}
