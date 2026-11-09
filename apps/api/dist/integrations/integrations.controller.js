var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Post, Patch, Req, UseGuards, Query, } from '@nestjs/common';
import { RegisterStudentSchema, CreateIntegrationSchema, UpdateIntegrationSchema, PaginationQuerySchema, } from '@satisfaccion/schemas';
import { JwtService } from '@nestjs/jwt';
import { IntegrationsService } from './integrations.service.js';
import { IntegrationApiKeyGuard } from './guards/integration-api-key.guard.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';
let IntegrationsController = class IntegrationsController {
    integrationsService;
    jwtService;
    constructor(integrationsService, jwtService) {
        this.integrationsService = integrationsService;
        this.jwtService = jwtService;
    }
    findAll(query) {
        const result = PaginationQuerySchema.safeParse(query);
        if (!result.success)
            throw new BadRequestException(result.error.issues);
        return this.integrationsService.findAll(result.data);
    }
    create(systemId, body, request) {
        const result = CreateIntegrationSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.integrationsService.create(systemId, result.data, request.admin.id);
    }
    verify(request) {
        return {
            message: 'Integración autenticada correctamente',
            system: {
                id: request.integration.system.id,
                name: request.integration.system.name,
                code: request.integration.system.code,
            },
        };
    }
    async createStudentToken(request, body) {
        const result = RegisterStudentSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        const integration = request.integration;
        const student = await this.integrationsService.registerStudent(result.data);
        const accessToken = await this.jwtService.signAsync({
            sub: student.id,
            integrationId: integration.id,
            systemId: integration.systemId,
        }, {
            audience: 'student',
            algorithm: 'HS256',
        });
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
    deactivate(id, request) {
        return this.integrationsService.deactivate(id, request.admin.id);
    }
    activate(id, request) {
        return this.integrationsService.activate(id, request.admin.id);
    }
    update(id, body, request) {
        const result = UpdateIntegrationSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.integrationsService.update(id, result.data, request.admin.id);
    }
    rotateApiKey(id, request) {
        return this.integrationsService.rotateApiKey(id, request.admin.id);
    }
};
__decorate([
    Get(),
    UseGuards(AdminJwtGuard),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "findAll", null);
__decorate([
    Post(':systemId'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('systemId', ParseUUIDPipe)),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "create", null);
__decorate([
    Get('verify'),
    UseGuards(IntegrationApiKeyGuard),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "verify", null);
__decorate([
    Post('token'),
    UseGuards(IntegrationApiKeyGuard),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IntegrationsController.prototype, "createStudentToken", null);
__decorate([
    Patch(':id/deactivate'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "deactivate", null);
__decorate([
    Patch(':id/activate'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "activate", null);
__decorate([
    Patch(':id'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "update", null);
__decorate([
    Patch(':id/rotate-key'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IntegrationsController.prototype, "rotateApiKey", null);
IntegrationsController = __decorate([
    Controller('integrations'),
    __metadata("design:paramtypes", [IntegrationsService,
        JwtService])
], IntegrationsController);
export { IntegrationsController };
//# sourceMappingURL=integrations.controller.js.map