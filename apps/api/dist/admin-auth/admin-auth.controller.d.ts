import { AdminAuthService } from './admin-auth.service.js';
export declare class AdminAuthController {
    private readonly adminAuthService;
    constructor(adminAuthService: AdminAuthService);
    login(body: unknown, request: any): Promise<{
        accessToken: string;
        tokenType: string;
        expiresIn: number;
        administrator: {
            id: string;
            fullName: string;
            email: string;
            role: string;
        };
    }>;
}
