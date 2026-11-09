import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type {
  SubmitEvaluationInput,
  UpdateWidgetConfigurationInput,
  WidgetInteractionInput,
} from '@satisfaccion/schemas';

@Injectable()
export class EvaluationsService {
  constructor(private readonly prisma: PrismaService) {}

  async checkEligibility(studentId: string, systemId: string, trigger: string) {
    const system = await this.prisma.system.findFirst({
      where: { id: systemId, active: true },
      include: { configuration: true },
    });
    if (!system || !system.configuration?.active) {
      throw new NotFoundException('Sistema o configuración no disponible');
    }
    if (!system.configuration.triggerMoments.includes(trigger as never)) {
      return { eligible: false, reason: 'TRIGGER_NOT_ALLOWED' };
    }

    const evaluation = await this.prisma.satisfactionEvaluation.findUnique({
      where: { studentId_systemId: { studentId, systemId } },
    });
    const eligible = !evaluation?.nextEligibleAt || evaluation.nextEligibleAt <= new Date();
    return {
      eligible,
      system: { id: system.id, name: system.name, code: system.code },
      configuration: {
        triggerMoments: system.configuration.triggerMoments,
        allowSkip: system.configuration.allowSkip,
      },
      nextEligibleAt: evaluation?.nextEligibleAt ?? null,
    };
  }

  async submitEvaluation(
    studentId: string,
    systemId: string,
    data: SubmitEvaluationInput,
  ) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        const [system, configuration] = await Promise.all([
          tx.system.findFirst({ where: { id: systemId, active: true }, select: { id: true } }),
          tx.widgetConfiguration.findUnique({ where: { systemId } }),
        ]);
        if (!system || !configuration?.active) {
          throw new NotFoundException('Sistema o configuración no disponible');
        }
        if (!configuration.triggerMoments.includes(data.trigger as never)) {
          throw new ConflictException('El trigger de evaluación no está habilitado');
        }

        const now = new Date();
        const existing = await tx.satisfactionEvaluation.findUnique({
          where: { studentId_systemId: { studentId, systemId } },
        });
        if (existing?.nextEligibleAt && existing.nextEligibleAt > now) {
          throw new ConflictException({
            message: 'Todavía no puedes realizar otra evaluación',
            nextEligibleAt: existing.nextEligibleAt,
          });
        }

        const nextEligibleAt = new Date(now);
        if (configuration.frequencyUnit === 'DAY') {
          nextEligibleAt.setDate(nextEligibleAt.getDate() + configuration.frequencyValue);
        } else if (configuration.frequencyUnit === 'WEEK') {
          nextEligibleAt.setDate(nextEligibleAt.getDate() + configuration.frequencyValue * 7);
        } else {
          const day = nextEligibleAt.getDate();
          nextEligibleAt.setDate(1);
          nextEligibleAt.setMonth(nextEligibleAt.getMonth() + configuration.frequencyValue);
          const lastDay = new Date(nextEligibleAt.getFullYear(), nextEligibleAt.getMonth() + 1, 0).getDate();
          nextEligibleAt.setDate(Math.min(day, lastDay));
        }

        const evaluation = await tx.satisfactionEvaluation.upsert({
          where: { studentId_systemId: { studentId, systemId } },
          create: {
            studentId,
            systemId,
            rating: data.rating,
            comment: data.comment,
            lastEvaluatedAt: now,
            nextEligibleAt,
          },
          update: {
            rating: data.rating,
            comment: data.comment,
            lastEvaluatedAt: now,
            nextEligibleAt,
          },
        });
        await tx.evaluationHistory.create({
          data: { evaluationId: evaluation.id, rating: data.rating, comment: data.comment, answeredAt: now },
        });
        await tx.widgetInteraction.create({
          data: { studentId, systemId, action: 'SUBMITTED', sessionId: data.sessionId },
        });
        return { message: 'Evaluación registrada correctamente', evaluation, nextEligibleAt };
      }, { isolationLevel: 'Serializable' });
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'P2034') {
        throw new ConflictException('La evaluación cambió en otra solicitud; vuelve a intentarlo');
      }
      if (error instanceof Error && 'code' in error && error.code === 'P2002') {
        throw new ConflictException('Esta sesión ya registró una evaluación');
      }
      throw error;
    }
  }

  async registerInteraction(
    studentId: string,
    systemId: string,
    data: WidgetInteractionInput,
  ) {
    const configuration = await this.prisma.widgetConfiguration.findUnique({ where: { systemId } });
    if (!configuration?.active) throw new NotFoundException('Configuración no disponible');
    if (!configuration.triggerMoments.includes(data.trigger as never)) {
      throw new ConflictException('El trigger de evaluación no está habilitado');
    }
    const evaluation = await this.prisma.satisfactionEvaluation.findUnique({
      where: { studentId_systemId: { studentId, systemId } },
      select: { nextEligibleAt: true },
    });
    if (evaluation?.nextEligibleAt && evaluation.nextEligibleAt > new Date()) {
      throw new ConflictException({
        message: 'El estudiante todavía no es elegible para una evaluación',
        nextEligibleAt: evaluation.nextEligibleAt,
      });
    }
    if (data.action === 'SKIPPED' && !configuration.allowSkip) {
      throw new ConflictException('No está permitido omitir la evaluación');
    }
    try {
      return await this.prisma.widgetInteraction.create({
        data: { studentId, systemId, action: data.action, sessionId: data.sessionId },
      });
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'P2002') {
        throw new ConflictException('Esta interacción ya fue registrada para la sesión');
      }
      throw error;
    }
  }

  async getWidgetConfiguration(systemId: string) {
    const system = await this.prisma.system.findFirst({
      where: { id: systemId, active: true },
      include: { configuration: true },
    });
    if (!system || !system.configuration?.active) {
      throw new NotFoundException('Sistema o configuración no disponible');
    }
    return {
      system: { id: system.id, name: system.name, code: system.code },
      configuration: {
        triggerMoments: system.configuration.triggerMoments,
        frequencyValue: system.configuration.frequencyValue,
        frequencyUnit: system.configuration.frequencyUnit,
        promptDelayMinutes: system.configuration.promptDelayMinutes,
        allowSkip: system.configuration.allowSkip,
      },
    };
  }

  async updateConfiguration(
    systemId: string,
    data: UpdateWidgetConfigurationInput,
    adminId: string,
  ) {
    const system = await this.prisma.system.findUnique({ where: { id: systemId } });
    if (!system) throw new NotFoundException('Sistema universitario no encontrado');
    return this.prisma.$transaction(async (tx) => {
      const configuration = await tx.widgetConfiguration.upsert({
        where: { systemId },
        create: { systemId, ...data },
        update: data,
      });
      await tx.auditLog.create({
        data: {
          adminId,
          action: 'UPDATE',
          entity: 'WidgetConfiguration',
          entityId: configuration.id,
          description: `Actualizó la configuración de evaluaciones de ${system.name}`,
        },
      });
      return { message: 'Configuración guardada correctamente', configuration };
    });
  }

  async getStudentHistory(
    studentId: string,
    systemId: string,
    pagination: { page: number; limit: number },
  ) {
    const where = { evaluation: { is: { studentId, systemId } } };
    const [data, total] = await Promise.all([
      this.prisma.evaluationHistory.findMany({
        where,
        orderBy: { answeredAt: 'desc' },
        skip: (pagination.page - 1) * pagination.limit,
        take: pagination.limit,
        select: { id: true, rating: true, comment: true, answeredAt: true },
      }),
      this.prisma.evaluationHistory.count({ where }),
    ]);
    return {
      data,
      pagination: { ...pagination, total, totalPages: Math.ceil(total / pagination.limit) },
    };
  }
}
