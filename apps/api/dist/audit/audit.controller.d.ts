import { AuditService } from './audit.service.js';
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    findAll(query: unknown): Promise<{
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
