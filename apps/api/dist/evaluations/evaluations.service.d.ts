import { PrismaService } from '../prisma/prisma.service.js';
import type { SubmitEvaluationInput, UpdateWidgetConfigurationInput, WidgetInteractionInput } from '@satisfaccion/schemas';
export declare class EvaluationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkEligibility(studentId: string, systemId: string, trigger: string): Promise<{
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
    submitEvaluation(studentId: string, systemId: string, data: SubmitEvaluationInput): Promise<{
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
    registerInteraction(studentId: string, systemId: string, data: WidgetInteractionInput): Promise<{
        id: string;
        systemId: string;
        studentId: string;
        sessionId: string | null;
        action: import("../generated/prisma/enums.js").EvaluationAction;
        occurredAt: Date;
    }>;
    getWidgetConfiguration(systemId: string): Promise<{
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
    updateConfiguration(systemId: string, data: UpdateWidgetConfigurationInput, adminId: string): Promise<{
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
    getStudentHistory(studentId: string, systemId: string, pagination: {
        page: number;
        limit: number;
    }): Promise<{
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
}
