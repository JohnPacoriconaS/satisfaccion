import { JwtService } from '@nestjs/jwt';
import { IntegrationsService } from './integrations.service.js';
export declare class IntegrationsController {
    private readonly integrationsService;
    private readonly jwtService;
    constructor(integrationsService: IntegrationsService, jwtService: JwtService);
    findAll(query: unknown): Promise<{
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
    create(systemId: string, body: unknown, request: any): Promise<{
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
    verify(request: any): {
        message: string;
        system: {
            id: any;
            name: any;
            code: any;
        };
    };
    createStudentToken(request: any, body: unknown): Promise<{
        accessToken: string;
        tokenType: string;
        expiresIn: number;
        student: {
            id: string;
            institutionalCode: string;
        };
    }>;
    deactivate(id: string, request: any): Promise<{
        id: string;
        active: boolean;
        createdAt: Date;
        systemId: string;
    }>;
    activate(id: string, request: any): Promise<{
        id: string;
        active: boolean;
        createdAt: Date;
        systemId: string;
    }>;
    update(id: string, body: unknown, request: any): Promise<{
        message: string;
        integration: {
            id: string;
            active: boolean;
            createdAt: Date;
            systemId: string;
            allowedOrigins: string[];
        };
    }>;
    rotateApiKey(id: string, request: any): Promise<{
        message: string;
        apiKey: string;
    }>;
}
