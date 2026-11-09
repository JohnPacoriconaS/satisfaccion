import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';

import { CreateSystemSchema, UpdateSystemSchema, PaginationQuerySchema } from '@satisfaccion/schemas';

import { SystemsService } from './systems.service.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';

@Controller('systems')
@UseGuards(AdminJwtGuard)
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Get()
  findAll(@Query() query: unknown) {
    const result = PaginationQuerySchema.safeParse(query);
    if (!result.success) throw new BadRequestException(result.error.issues);
    return this.systemsService.findAll(result.data);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.systemsService.findOne(id);
  }

  @Post()
  create(@Body() body: unknown, @Req() request: any) {
    const result = CreateSystemSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.systemsService.create(result.data, request.admin.id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: unknown,
    @Req() request: any,
  ) {
    const result = UpdateSystemSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.systemsService.update(id, result.data, request.admin.id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string, @Req() request: any) {
    return this.systemsService.remove(id, request.admin.id);
  }
}
