import type { RegisterStudentInput } from '@satisfaccion/schemas';
import type { CreateIntegrationInput } from '@satisfaccion/schemas';
import { PrismaService } from '../prisma/prisma.service.js';
import type { UpdateIntegrationInput } from '@satisfaccion/schemas';
export declare class IntegrationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(systemId: string, data: CreateIntegrationInput, adminId: string): Promise<{
        message: string;
        integration: {
            id: string;
            active: boolean;
            createdAt: Date;
            systemId: string;
            allowedOrigins: string[];
        };
        apiKey: string;
    }>;
    findAll(pagination: {
        page: number;
        limit: number;
    }): Promise<{
        data: {
            id: string;
            active: boolean;
            createdAt: Date;
            systemId: string;
            allowedOrigins: string[];
            system: {
                name: string;
                code: string;
            };
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    update(id: string, data: UpdateIntegrationInput, adminId: string): Promise<{
        message: string;
        integration: {
            id: string;
            active: boolean;
            createdAt: Date;
            systemId: string;
            allowedOrigins: string[];
        };
    }>;
    validateApiKey(apiKey: string): Promise<({
        system: {
            id: string;
            name: string;
            code: string;
            description: string | null;
            baseUrl: string | null;
            active: boolean;
            createdAt: Date;
        };
    } & {
        id: string;
        active: boolean;
        createdAt: Date;
        systemId: string;
        apiKeyHash: string;
        allowedOrigins: string[];
    }) | null>;
    registerStudent(data: RegisterStudentInput): Promise<{
        id: string;
        active: boolean;
        createdAt: Date;
        institutionalCode: string;
        fullName: string | null;
        email: string | null;
    }>;
    deactivate(id: string, adminId: string): Promise<{
        id: string;
        active: boolean;
        createdAt: Date;
        systemId: string;
    }>;
    activate(id: string, adminId: string): Promise<{
        id: string;
        active: boolean;
        createdAt: Date;
        systemId: string;
    }>;
    rotateApiKey(id: string, adminId: string): Promise<{
        message: string;
        apiKey: string;
    }>;
}
