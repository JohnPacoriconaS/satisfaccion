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

@Module({
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
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
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
export class AppModule {}
