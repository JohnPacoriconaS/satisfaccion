import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';

import { AuditService } from './audit.service.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';
import { AuditQuerySchema } from '@satisfaccion/schemas';

@Controller('audit')
@UseGuards(AdminJwtGuard)
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get()
  findAll(@Query() query: unknown) {
    const result = AuditQuerySchema.safeParse(query);
    if (!result.success) throw new BadRequestException(result.error.issues);
    return this.auditService.findAll(result.data);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.auditService.findOne(id);
  }
}
