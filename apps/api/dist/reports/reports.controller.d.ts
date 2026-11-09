import { ReportsService } from './reports.service.js';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
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
