import { SystemsService } from './systems.service.js';
export declare class SystemsController {
    private readonly systemsService;
    constructor(systemsService: SystemsService);
    findAll(query: unknown): Promise<{
        data: {
            id: string;
            name: string;
            code: string;
            description: string | null;
            baseUrl: string | null;
            active: boolean;
            createdAt: Date;
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
    create(body: unknown, request: any): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
    update(id: string, body: unknown, request: any): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
    remove(id: string, request: any): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
}
