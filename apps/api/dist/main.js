import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { PrismaService } from './prisma/prisma.service.js';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const prisma = app.get(PrismaService);
    const config = app.get(ConfigService);
    let allowedOriginsCache = new Set();
    let allowedOriginsExpiresAt = 0;
    let allowedOriginsRefresh;
    app.enableCors({
        origin: async (origin, callback) => {
            if (!origin) {
                return callback(null, true);
            }
            try {
                if (Date.now() >= allowedOriginsExpiresAt) {
                    allowedOriginsRefresh ??= prisma.integration.findMany({
                        where: { active: true, system: { active: true } },
                        select: { allowedOrigins: true },
                    }).then((integrations) => new Set(integrations.flatMap(({ allowedOrigins }) => allowedOrigins)));
                    try {
                        allowedOriginsCache = await allowedOriginsRefresh;
                        allowedOriginsExpiresAt = Date.now() + 30_000;
                    }
                    finally {
                        allowedOriginsRefresh = undefined;
                    }
                }
                const allowed = allowedOriginsCache.has(origin);
                if (allowed) {
                    return callback(null, true);
                }
                return callback(null, false);
            }
            catch (error) {
                return callback(error, false);
            }
        },
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'x-api-key',
        ],
    });
    await app.listen(config.get('PORT', 3001), config.get('HOST', '0.0.0.0'));
}
await bootstrap();
//# sourceMappingURL=main.js.map