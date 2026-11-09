import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class AdminAuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly failedLogins;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string, clientIp: string): Promise<{
        accessToken: string;
        tokenType: string;
        expiresIn: number;
        administrator: {
            id: string;
            fullName: string;
            email: string;
            role: string;
        };
    }>;
    private recordFailure;
}
