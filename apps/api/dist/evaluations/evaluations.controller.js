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
import { BadRequestException, Body, Controller, Get, Patch, Param, ParseUUIDPipe, Post, Query, Req, UseGuards, } from '@nestjs/common';
import { SubmitEvaluationSchema, WidgetInteractionSchema, UpdateWidgetConfigurationSchema, EvaluationTriggerSchema, PaginationQuerySchema, } from '@satisfaccion/schemas';
import { EvaluationsService } from './evaluations.service.js';
import { StudentJwtGuard } from '../auth/guards/student-jwt.guard.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';
let EvaluationsController = class EvaluationsController {
    evaluationsService;
    constructor(evaluationsService) {
        this.evaluationsService = evaluationsService;
    }
    checkEligibility(request, trigger) {
        const parsedTrigger = EvaluationTriggerSchema.safeParse(trigger);
        if (!parsedTrigger.success) {
            throw new BadRequestException('Trigger de evaluación inválido');
        }
        return this.evaluationsService.checkEligibility(request.student.id, request.student.systemId, parsedTrigger.data);
    }
    getHistory(request, query) {
        const result = PaginationQuerySchema.safeParse(query);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.evaluationsService.getStudentHistory(request.student.id, request.student.systemId, result.data);
    }
    submitEvaluation(request, body) {
        const result = SubmitEvaluationSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.evaluationsService.submitEvaluation(request.student.id, request.student.systemId, result.data);
    }
    registerInteraction(request, body) {
        const result = WidgetInteractionSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.evaluationsService.registerInteraction(request.student.id, request.student.systemId, result.data);
    }
    getWidgetConfiguration(request) {
        return this.evaluationsService.getWidgetConfiguration(request.student.systemId);
    }
    updateConfiguration(systemId, body, request) {
        const result = UpdateWidgetConfigurationSchema.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.issues);
        }
        return this.evaluationsService.updateConfiguration(systemId, result.data, request.admin.id);
    }
};
__decorate([
    Get('eligibility'),
    UseGuards(StudentJwtGuard),
    __param(0, Req()),
    __param(1, Query('trigger')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "checkEligibility", null);
__decorate([
    Get('history'),
    UseGuards(StudentJwtGuard),
    __param(0, Req()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "getHistory", null);
__decorate([
    Post('submit'),
    UseGuards(StudentJwtGuard),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "submitEvaluation", null);
__decorate([
    Post('interaction'),
    UseGuards(StudentJwtGuard),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "registerInteraction", null);
__decorate([
    Get('configuration'),
    UseGuards(StudentJwtGuard),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "getWidgetConfiguration", null);
__decorate([
    Patch('configuration/:systemId'),
    UseGuards(AdminJwtGuard),
    __param(0, Param('systemId', ParseUUIDPipe)),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "updateConfiguration", null);
EvaluationsController = __decorate([
    Controller('evaluations'),
    __metadata("design:paramtypes", [EvaluationsService])
], EvaluationsController);
export { EvaluationsController };
//# sourceMappingURL=evaluations.controller.js.map