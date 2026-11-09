var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let SystemsService = class SystemsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pagination) {
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
    async findOne(id) {
        const system = await this.prisma.system.findFirst({
            where: { id, active: true },
        });
        if (!system) {
            throw new NotFoundException('Sistema no encontrado');
        }
        return system;
    }
    async create(data, adminId) {
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
        }
        catch (error) {
            if (error instanceof Error && 'code' in error && error.code === 'P2002') {
                throw new ConflictException('El código del sistema ya existe');
            }
            throw error;
        }
    }
    async update(id, data, adminId) {
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
        }
        catch (error) {
            if (error instanceof Error && 'code' in error && error.code === 'P2002') {
                throw new ConflictException('El código del sistema ya existe');
            }
            throw error;
        }
    }
    async remove(id, adminId) {
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
};
SystemsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SystemsService);
export { SystemsService };
//# sourceMappingURL=systems.service.js.map