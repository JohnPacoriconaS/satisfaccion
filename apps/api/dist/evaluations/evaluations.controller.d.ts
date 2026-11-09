import { EvaluationsService } from './evaluations.service.js';
export declare class EvaluationsController {
    private readonly evaluationsService;
    constructor(evaluationsService: EvaluationsService);
    checkEligibility(request: any, trigger: string): Promise<{
        eligible: boolean;
        reason: string;
        system?: undefined;
        configuration?: undefined;
        nextEligibleAt?: undefined;
    } | {
        eligible: boolean;
        system: {
            id: string;
            name: string;
            code: string;
        };
        configuration: {
            triggerMoments: import("../generated/prisma/enums.js").TriggerMoment[];
            allowSkip: boolean;
        };
        nextEligibleAt: Date | null;
        reason?: undefined;
    }>;
    getHistory(request: any, query: unknown): Promise<{
        data: {
            id: string;
            rating: number;
            comment: string | null;
            answeredAt: Date;
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    submitEvaluation(request: any, body: unknown): Promise<{
        message: string;
        evaluation: {
            id: string;
            createdAt: Date;
            systemId: string;
            updatedAt: Date;
            studentId: string;
            rating: number | null;
            comment: string | null;
            lastEvaluatedAt: Date | null;
            nextEligibleAt: Date | null;
        };
        nextEligibleAt: Date;
    }>;
    registerInteraction(request: any, body: unknown): Promise<{
        id: string;
        systemId: string;
        studentId: string;
        sessionId: string | null;
        action: import("../generated/prisma/enums.js").EvaluationAction;
        occurredAt: Date;
    }>;
    getWidgetConfiguration(request: any): Promise<{
        system: {
            id: string;
            name: string;
            code: string;
        };
        configuration: {
            triggerMoments: import("../generated/prisma/enums.js").TriggerMoment[];
            frequencyValue: number;
            frequencyUnit: import("../generated/prisma/enums.js").FrequencyUnit;
            promptDelayMinutes: number;
            allowSkip: boolean;
        };
    }>;
    updateConfiguration(systemId: string, body: unknown, request: any): Promise<{
        message: string;
        configuration: {
            id: string;
            active: boolean;
            createdAt: Date;
            systemId: string;
            triggerMoments: import("../generated/prisma/enums.js").TriggerMoment[];
            frequencyValue: number;
            frequencyUnit: import("../generated/prisma/enums.js").FrequencyUnit;
            promptDelayMinutes: number;
            allowSkip: boolean;
            updatedAt: Date;
        };
    }>;
}
