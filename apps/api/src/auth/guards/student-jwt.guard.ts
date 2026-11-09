import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class StudentJwtGuard implements CanActivate {
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
        audience: 'student',
        algorithms: ['HS256'],
      });
    } catch {
      throw new UnauthorizedException('Token inválido o expirado');
    }
    if (
      typeof payload.sub !== 'string' ||
      typeof payload.integrationId !== 'string' ||
      typeof payload.systemId !== 'string'
    ) {
      throw new UnauthorizedException('Token sin datos válidos');
    }

    const [student, integration] = await Promise.all([
      this.prisma.student.findFirst({
        where: { id: payload.sub, active: true },
        select: { id: true },
      }),
      this.prisma.integration.findFirst({
        where: {
          id: payload.integrationId,
          systemId: payload.systemId,
          active: true,
          system: { active: true },
        },
        select: { id: true },
      }),
    ]);
    if (!student || !integration) {
      throw new UnauthorizedException('Estudiante o integración inactiva');
    }
    request.student = {
      id: student.id,
      integrationId: integration.id,
      systemId: payload.systemId,
    };
    return true;
  }
}
