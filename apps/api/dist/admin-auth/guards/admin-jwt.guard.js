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
let AdminJwtGuard = class AdminJwtGuard {
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
                audience: 'admin',
                algorithms: ['HS256'],
            });
        }
        catch {
            throw new UnauthorizedException('Token inválido o expirado');
        }
        if (typeof payload.sub !== 'string' || payload.tokenType !== 'ADMIN') {
            throw new UnauthorizedException('Token administrativo inválido');
        }
        const admin = await this.prisma.adminUser.findFirst({
            where: { id: payload.sub, active: true },
            select: {
                id: true,
                email: true,
                role: { select: { name: true } },
            },
        });
        if (!admin)
            throw new UnauthorizedException('Administrador inactivo');
        request.admin = admin;
        return true;
    }
};
AdminJwtGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        PrismaService])
], AdminJwtGuard);
export { AdminJwtGuard };
//# sourceMappingURL=admin-jwt.guard.js.map