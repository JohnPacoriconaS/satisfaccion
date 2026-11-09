import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import type {
  CreateSystemInput,
  UpdateSystemInput,
} from '@satisfaccion/schemas';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SystemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: { page: number; limit: number }) {
    const where = { active: true };
    const [data, total] = await Promise.all([
      this.prisma.system.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (pagination.page - 1) * pagination.limit,
        take: pagination.limit,
      }),
      this.prisma.system.count({ where }),
    ]);
    return { data, pagination: { ...pagination, total, totalPages: Math.ceil(total / pagination.limit) } };
  }

  async findOne(id: string) {
    const system = await this.prisma.system.findFirst({
      where: { id, active: true },
    });

    if (!system) {
      throw new NotFoundException('Sistema no encontrado');
    }

    return system;
  }

  async create(data: CreateSystemInput, adminId: string) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        const system = await tx.system.create({
          data,
        });

        await tx.auditLog.create({
          data: {
            adminId,
            action: 'CREATE',
            entity: 'System',
            entityId: system.id,
            description: `Creó el sistema ${system.name}`,
          },
        });

        return system;
      });
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'P2002') {
        throw new ConflictException('El código del sistema ya existe');
      }

      throw error;
    }
  }

  async update(id: string, data: UpdateSystemInput, adminId: string) {
    await this.findOne(id);

    try {
      return await this.prisma.$transaction(async (tx) => {
        const system = await tx.system.update({
          where: { id },
          data,
        });

        await tx.auditLog.create({
          data: {
            adminId,
            action: 'UPDATE',
            entity: 'System',
            entityId: system.id,
            description: `Actualizó el sistema ${system.name}`,
          },
        });

        return system;
      });
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'P2002') {
        throw new ConflictException('El código del sistema ya existe');
      }

      throw error;
    }
  }

  async remove(id: string, adminId: string) {
    await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      const system = await tx.system.update({
        where: { id },
        data: {
          active: false,
        },
      });

      await tx.auditLog.create({
        data: {
          adminId,
          action: 'DELETE',
          entity: 'System',
          entityId: system.id,
          description: `Desactivó el sistema ${system.name}`,
        },
      });

      return system;
    });
  }
}
