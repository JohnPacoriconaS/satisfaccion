var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service.js';
let StudentJwtGuard = class StudentJwtGuard {
    jwtService;
    prisma;
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token requerido');
        }
        let payload;
        try {
            payload = await this.jwtService.verifyAsync(authHeader.substring(7), {
                audience: 'student',
                algorithms: ['HS256'],
            });
        }
        catch {
            throw new UnauthorizedException('Token inválido o expirado');
        }
        if (typeof payload.sub !== 'string' ||
            typeof payload.integrationId !== 'string' ||
            typeof payload.systemId !== 'string') {
            throw new UnauthorizedException('Token sin datos válidos');
        }
        const [student, integration] = await Promise.all([
            this.prisma.student.findFirst({
                where: { id: payload.sub, active: true },
                select: { id: true },
            }),
            this.prisma.integration.findFirst({
                where: {
                    id: payload.integrationId,
                    systemId: payload.systemId,
                    active: true,
                    system: { active: true },
                },
                select: { id: true },
            }),
        ]);
        if (!student || !integration) {
            throw new UnauthorizedException('Estudiante o integración inactiva');
        }
        request.student = {
            id: student.id,
            integrationId: integration.id,
            systemId: payload.systemId,
        };
        return true;
    }
};
StudentJwtGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        PrismaService])
], StudentJwtGuard);
export { StudentJwtGuard };
//# sourceMappingURL=student-jwt.guard.js.map