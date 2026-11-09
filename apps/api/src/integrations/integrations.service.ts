import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { createHash, randomBytes } from 'node:crypto';
import type { RegisterStudentInput } from '@satisfaccion/schemas';
import type { CreateIntegrationInput } from '@satisfaccion/schemas';
import { PrismaService } from '../prisma/prisma.service.js';
import type { UpdateIntegrationInput } from '@satisfaccion/schemas';

@Injectable()
export class IntegrationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    systemId: string,
    data: CreateIntegrationInput,
    adminId: string,
  ) {
    const system = await this.prisma.system.findUnique({
      where: { id: systemId },
    });

    if (!system) {
      throw new NotFoundException('Sistema universitario no encontrado');
    }

    if (!system.active) {
      throw new ConflictException('No se puede integrar un sistema inactivo');
    }

    const apiKey = `sat_${randomBytes(32).toString('hex')}`;
    const apiKeyHash = createHash('sha256').update(apiKey).digest('hex');

    try {
      const integration = await this.prisma.$transaction(async (tx) => {
        const createdIntegration = await tx.integration.create({
          data: {
            systemId,
            apiKeyHash,
            allowedOrigins: data.allowedOrigins,
          },
          select: {
            id: true,
            systemId: true,
            allowedOrigins: true,
            active: true,
            createdAt: true,
          },
        });

        await tx.auditLog.create({
          data: {
            adminId,
            action: 'CREATE',
            entity: 'Integration',
            entityId: createdIntegration.id,
            description: `Creó una integración para ${system.name}`,
          },
        });

        return createdIntegration;
      });

      return {
        message: 'Integración creada correctamente',
        integration,
        apiKey,
      };
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'P2002') {
        throw new ConflictException(
          'Este sistema ya tiene una integración registrada',
        );
      }

      throw error;
    }
  }
  async findAll(pagination: { page: number; limit: number }) {
    const [data, total] = await Promise.all([
      this.prisma.integration.findMany({
        select: {
        id: true,
        systemId: true,
        allowedOrigins: true,
        active: true,
        createdAt: true,
        system: {
          select: {
            name: true,
            code: true,
          },
        },
        },
        orderBy: { createdAt: 'desc' },
        skip: (pagination.page - 1) * pagination.limit,
        take: pagination.limit,
      }),
      this.prisma.integration.count(),
    ]);
    return { data, pagination: { ...pagination, total, totalPages: Math.ceil(total / pagination.limit) } };
  }
  async update(id: string, data: UpdateIntegrationInput, adminId: string) {
    const integration = await this.prisma.integration.findUnique({
      where: { id },
      include: {
        system: {
          select: { name: true },
        },
      },
    });

    if (!integration) {
      throw new NotFoundException('Integración no encontrada');
    }

    const updatedIntegration = await this.prisma.$transaction(async (tx) => {
      const updated = await tx.integration.update({
        where: { id },
        data,
        select: {
          id: true,
          systemId: true,
          allowedOrigins: true,
          active: true,
          createdAt: true,
        },
      });

      await tx.auditLog.create({
        data: {
          adminId,
          action: 'UPDATE',
          entity: 'Integration',
          entityId: integration.id,
          description: `Actualizó los dominios permitidos de ${integration.system.name}`,
        },
      });

      return updated;
    });

    return {
      message: 'Integración actualizada correctamente',
      integration: updatedIntegration,
    };
  }

  async validateApiKey(apiKey: string) {
    const apiKeyHash = createHash('sha256').update(apiKey).digest('hex');

    const integration = await this.prisma.integration.findUnique({
      where: { apiKeyHash },
      include: { system: true },
    });

    if (!integration || !integration.active || !integration.system.active) {
      return null;
    }

    return integration;
  }
  async registerStudent(data: RegisterStudentInput) {
    return this.prisma.student.upsert({
      where: {
        institutionalCode: data.institutionalCode,
      },
      update: {
        fullName: data.fullName,
        email: data.email,
      },
      create: data,
    });
  }
  async deactivate(id: string, adminId: string) {
    const integration = await this.prisma.integration.findUnique({
      where: { id },
      include: {
        system: {
          select: { name: true },
        },
      },
    });

    if (!integration) {
      throw new NotFoundException('Integración no encontrada');
    }

    if (!integration.active) {
      throw new ConflictException('La integración ya está desactivada');
    }

    return this.prisma.$transaction(async (tx) => {
      const updatedIntegration = await tx.integration.update({
        where: { id },
        data: { active: false },
        select: { id: true, systemId: true, active: true, createdAt: true },
      });

      await tx.auditLog.create({
        data: {
          adminId,
          action: 'DELETE',
          entity: 'Integration',
          entityId: integration.id,
          description: `Desactivó la integración de ${integration.system.name}`,
        },
      });

      return updatedIntegration;
    });
  }
  async activate(id: string, adminId: string) {
    const integration = await this.prisma.integration.findUnique({
      where: { id },
      include: {
        system: {
          select: {
            name: true,
            active: true,
          },
        },
      },
    });

    if (!integration) {
      throw new NotFoundException('Integración no encontrada');
    }

    if (!integration.system.active) {
      throw new ConflictException(
        'No se puede activar la integración de un sistema inactivo',
      );
    }

    if (integration.active) {
      throw new ConflictException('La integración ya está activa');
    }

    return this.prisma.$transaction(async (tx) => {
      const updatedIntegration = await tx.integration.update({
        where: { id },
        data: { active: true },
        select: { id: true, systemId: true, active: true, createdAt: true },
      });

      await tx.auditLog.create({
        data: {
          adminId,
          action: 'UPDATE',
          entity: 'Integration',
          entityId: integration.id,
          description: `Activó la integración de ${integration.system.name}`,
        },
      });

      return updatedIntegration;
    });
  }
  async rotateApiKey(id: string, adminId: string) {
    const integration = await this.prisma.integration.findUnique({
      where: { id },
      include: {
        system: {
          select: {
            name: true,
            active: true,
          },
        },
      },
    });

    if (!integration) {
      throw new NotFoundException('Integración no encontrada');
    }

    if (!integration.active || !integration.system.active) {
      throw new ConflictException(
        'No se puede renovar la API Key de una integración inactiva',
      );
    }

    const apiKey = `sat_${randomBytes(32).toString('hex')}`;
    const apiKeyHash = createHash('sha256').update(apiKey).digest('hex');

    await this.prisma.$transaction(async (tx) => {
      await tx.integration.update({
        where: { id },
        data: { apiKeyHash },
      });

      await tx.auditLog.create({
        data: {
          adminId,
          action: 'UPDATE',
          entity: 'Integration',
          entityId: integration.id,
          description: `Renovó la API Key de ${integration.system.name}`,
        },
      });
    });

    return {
      message: 'API Key renovada correctamente',
      apiKey,
    };
  }
}
