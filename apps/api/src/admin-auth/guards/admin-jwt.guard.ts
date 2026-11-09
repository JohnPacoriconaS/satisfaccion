import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class AdminJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token requerido');
    }
    let payload: any;
    try {
      payload = await this.jwtService.verifyAsync(authHeader.substring(7), {
        audience: 'admin',
        algorithms: ['HS256'],
      });
    } catch {
      throw new UnauthorizedException('Token inválido o expirado');
    }
    if (typeof payload.sub !== 'string' || payload.tokenType !== 'ADMIN') {
      throw new UnauthorizedException('Token administrativo inválido');
    }
    const admin = await this.prisma.adminUser.findFirst({
      where: { id: payload.sub, active: true },
      select: {
        id: true,
        email: true,
        role: { select: { name: true } },
      },
    });
    if (!admin) throw new UnauthorizedException('Administrador inactivo');
    request.admin = admin;
    return true;
  }
}
