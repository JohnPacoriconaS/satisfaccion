import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { z } from '@satisfaccion/schemas';
import { AdminAuthService } from './admin-auth.service.js';

const AdminLoginSchema = z.object({
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
  password: z.string().min(1),
});

@Controller('admin-auth')
export class AdminAuthController {
  constructor(
    private readonly adminAuthService: AdminAuthService,
  ) {}

  @Post('login')
  async login(@Body() body: unknown, @Req() request: any) {
    const result = AdminLoginSchema.safeParse(body);

    if (!result.success) {
      throw new UnauthorizedException('Datos de inicio de sesión inválidos');
    }

    return this.adminAuthService.login(
      result.data.email,
      result.data.password,
      request.ip ?? request.socket?.remoteAddress ?? 'unknown',
    );
  }
}
