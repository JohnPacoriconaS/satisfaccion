
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  SubmitEvaluationSchema,
  WidgetInteractionSchema,
  UpdateWidgetConfigurationSchema,
  EvaluationTriggerSchema,
  PaginationQuerySchema,
} from '@satisfaccion/schemas';

import { EvaluationsService } from './evaluations.service.js';
import { StudentJwtGuard } from '../auth/guards/student-jwt.guard.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';

@Controller('evaluations')
export class EvaluationsController {
  constructor(
    private readonly evaluationsService: EvaluationsService,
  ) {}

  // RUTAS PARA ESTUDIANTES

  @Get('eligibility')
  @UseGuards(StudentJwtGuard)
  checkEligibility(
    @Req() request: any,
    @Query('trigger') trigger: string,
  ) {
    const parsedTrigger = EvaluationTriggerSchema.safeParse(trigger);
    if (!parsedTrigger.success) {
      throw new BadRequestException('Trigger de evaluación inválido');
    }
    return this.evaluationsService.checkEligibility(
      request.student.id,
      request.student.systemId,
      parsedTrigger.data,
    );
  }

  @Get('history')
  @UseGuards(StudentJwtGuard)
  getHistory(@Req() request: any, @Query() query: unknown) {
    const result = PaginationQuerySchema.safeParse(query);
    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }
    return this.evaluationsService.getStudentHistory(
      request.student.id,
      request.student.systemId,
      result.data,
    );
  }

  @Post('submit')
  @UseGuards(StudentJwtGuard)
  submitEvaluation(
    @Req() request: any,
    @Body() body: unknown,
  ) {
    const result = SubmitEvaluationSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.evaluationsService.submitEvaluation(
      request.student.id,
      request.student.systemId,
      result.data,
    );
  }

  @Post('interaction')
  @UseGuards(StudentJwtGuard)
  registerInteraction(
    @Req() request: any,
    @Body() body: unknown,
  ) {
    const result = WidgetInteractionSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.evaluationsService.registerInteraction(
      request.student.id,
      request.student.systemId,
      result.data,
    );
  }

  @Get('configuration')
  @UseGuards(StudentJwtGuard)
  getWidgetConfiguration(@Req() request: any) {
    return this.evaluationsService.getWidgetConfiguration(
      request.student.systemId,
    );
  }

  // RUTAS ADMINISTRATIVAS

  @Patch('configuration/:systemId')
  @UseGuards(AdminJwtGuard)
  updateConfiguration(
    @Param('systemId', ParseUUIDPipe) systemId: string,
    @Body() body: unknown,
    @Req() request: any,
  ) {
    const result = UpdateWidgetConfigurationSchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }

    return this.evaluationsService.updateConfiguration(
      systemId,
      result.data,
      request.admin.id,
    );
  }
}
