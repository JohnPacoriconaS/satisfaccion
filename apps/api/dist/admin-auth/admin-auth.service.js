var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { createHash } from 'node:crypto';
let AdminAuthService = class AdminAuthService {
    prisma;
    jwtService;
    failedLogins = new Map();
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(email, password, clientIp) {
        const accountKey = `account:${createHash('sha256').update(email.toLowerCase()).digest('hex')}`;
        const throttleKeys = [`ip:${clientIp}`, accountKey];
        const attempts = throttleKeys.map((key) => this.failedLogins.get(key));
        if (attempts.some((entry) => entry && entry.resetAt > Date.now() && entry.count >= 5)) {
            throw new HttpException('Demasiados intentos. Intenta nuevamente en 15 minutos.', HttpStatus.TOO_MANY_REQUESTS);
        }
        for (const key of throttleKeys) {
            const entry = this.failedLogins.get(key);
            if (entry && entry.resetAt <= Date.now())
                this.failedLogins.delete(key);
        }
        const admin = await this.prisma.adminUser.findUnique({
            where: { email: email.toLowerCase() },
            include: { role: true },
        });
        if (!admin || !admin.active) {
            throttleKeys.forEach((key) => this.recordFailure(key));
            throw new UnauthorizedException('Credenciales incorrectas');
        }
        const passwordValid = await bcrypt.compare(password, admin.passwordHash);
        if (!passwordValid) {
            throttleKeys.forEach((key) => this.recordFailure(key));
            throw new UnauthorizedException('Credenciales incorrectas');
        }
        this.failedLogins.delete(accountKey);
        const accessToken = await this.jwtService.signAsync({
            sub: admin.id,
            role: admin.role.name,
            tokenType: 'ADMIN',
        }, {
            audience: 'admin',
            algorithm: 'HS256',
        });
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 300,
            administrator: {
                id: admin.id,
                fullName: admin.fullName,
                email: admin.email,
                role: admin.role.name,
            },
        };
    }
    recordFailure(key) {
        const now = Date.now();
        if (this.failedLogins.size >= 10_000 && !this.failedLogins.has(key)) {
            for (const [storedKey, value] of this.failedLogins) {
                if (value.resetAt <= now)
                    this.failedLogins.delete(storedKey);
            }
            if (this.failedLogins.size >= 10_000) {
                const oldestKey = this.failedLogins.keys().next().value;
                if (oldestKey)
                    this.failedLogins.delete(oldestKey);
            }
        }
        const entry = this.failedLogins.get(key);
        if (!entry || entry.resetAt <= now) {
            this.failedLogins.set(key, { count: 1, resetAt: now + 15 * 60 * 1000 });
            return;
        }
        entry.count += 1;
    }
};
AdminAuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AdminAuthService);
export { AdminAuthService };
//# sourceMappingURL=admin-auth.service.js.map