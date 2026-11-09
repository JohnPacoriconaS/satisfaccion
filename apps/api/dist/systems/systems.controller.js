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
import { BadRequestException, Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards, Query, } from '@nestjs/common';
import { CreateSystemSchema, UpdateSystemSchema, PaginationQuerySchema } from '@satisfaccion/schemas';
import { SystemsService } from './systems.service.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';
let SystemsController = class SystemsController {
    systemsService;
    constructor(systemsService) {
        this.systemsService = systemsService;
    }
    findAll(query) {
        const result = PaginationQuerySchema.safeParse(query);
        if (!result.success)
            throw new BadRequestException(result.error.issues);
        return this.systemsService.findAll(result.data);
    }
    findOne(id) {
        return this.systemsService.findOne(id);
    }
    create(body, request) {
        const result = CreateSystemSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.systemsService.create(result.data, request.admin.id);
    }
    update(id, body, request) {
        const result = UpdateSystemSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.systemsService.update(id, result.data, request.admin.id);
    }
    remove(id, request) {
        return this.systemsService.remove(id, request.admin.id);
    }
};
__decorate([
    Get(),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SystemsController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SystemsController.prototype, "findOne", null);
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SystemsController.prototype, "create", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], SystemsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SystemsController.prototype, "remove", null);
SystemsController = __decorate([
    Controller('systems'),
    UseGuards(AdminJwtGuard),
    __metadata("design:paramtypes", [SystemsService])
], SystemsController);
export { SystemsController };
//# sourceMappingURL=systems.controller.js.map