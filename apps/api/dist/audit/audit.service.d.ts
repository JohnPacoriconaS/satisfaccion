import { PrismaService } from '../prisma/prisma.service.js';
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: {
        action?: string;
        entity?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        data: ({
            admin: {
                id: string;
                fullName: string;
                email: string;
            } | null;
        } & {
            id: string;
            description: string | null;
            createdAt: Date;
            action: string;
            adminId: string | null;
            entity: string;
            entityId: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        admin: {
            id: string;
            fullName: string;
            email: string;
        } | null;
    } & {
        id: string;
        description: string | null;
        createdAt: Date;
        action: string;
        adminId: string | null;
        entity: string;
        entityId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
