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
import { createHash, randomBytes } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';
let IntegrationsService = class IntegrationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(systemId, data, adminId) {
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
        }
        catch (error) {
            if (error instanceof Error && 'code' in error && error.code === 'P2002') {
                throw new ConflictException('Este sistema ya tiene una integración registrada');
            }
            throw error;
        }
    }
    async findAll(pagination) {
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
    async update(id, data, adminId) {
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
    async validateApiKey(apiKey) {
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
    async registerStudent(data) {
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
    async deactivate(id, adminId) {
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
    async activate(id, adminId) {
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
            throw new ConflictException('No se puede activar la integración de un sistema inactivo');
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
    async rotateApiKey(id, adminId) {
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
            throw new ConflictException('No se puede renovar la API Key de una integración inactiva');
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
};
IntegrationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], IntegrationsService);
export { IntegrationsService };
//# sourceMappingURL=integrations.service.js.map