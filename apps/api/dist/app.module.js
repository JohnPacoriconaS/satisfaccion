var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { AdminAuthModule } from './admin-auth/admin-auth.module.js';
import { SystemsModule } from './systems/systems.module.js';
import { IntegrationsModule } from './integrations/integrations.module.js';
import { EvaluationsModule } from './evaluations/evaluations.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { AuditModule } from './audit/audit.module.js';
import { z } from '@satisfaccion/schemas';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            AuditModule,
            ReportsModule,
            ConfigModule.forRoot({
                isGlobal: true,
                validate: (config) => z.object({
                    DATABASE_URL: z.string().min(1),
                    JWT_SECRET: z.string().min(32),
                    PORT: z.coerce.number().int().min(1).max(65535).default(3001),
                    HOST: z.string().min(1).default('0.0.0.0'),
                }).passthrough().parse(config),
            }),
            JwtModule.registerAsync({
                global: true,
                inject: [ConfigService],
                useFactory: (configService) => ({
                    secret: configService.getOrThrow('JWT_SECRET'),
                    signOptions: {
                        expiresIn: '5m',
                    },
                }),
            }),
            PrismaModule,
            AuthModule,
            AdminAuthModule,
            SystemsModule,
            IntegrationsModule,
            EvaluationsModule,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map