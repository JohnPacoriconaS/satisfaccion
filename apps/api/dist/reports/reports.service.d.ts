import { PrismaService } from '../prisma/prisma.service.js';
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    overview(): Promise<{
        students: number;
        systems: number;
        evaluations: number;
        averageRating: number;
    }>;
    systemsReport(): Promise<{
        system: {
            id: string;
            name: string;
            code: string;
        };
        averageRating: number;
        totalEvaluations: number;
    }[]>;
    ratingsReport(): Promise<{
        rating: number;
        total: number;
    }[]>;
}
