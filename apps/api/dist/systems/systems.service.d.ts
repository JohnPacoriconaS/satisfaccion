import type { CreateSystemInput, UpdateSystemInput } from '@satisfaccion/schemas';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class SystemsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(pagination: {
        page: number;
        limit: number;
    }): Promise<{
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
    create(data: CreateSystemInput, adminId: string): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
    update(id: string, data: UpdateSystemInput, adminId: string): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
    remove(id: string, adminId: string): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }>;
}
