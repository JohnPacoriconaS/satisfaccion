import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { createHash } from 'node:crypto';

@Injectable()
export class AdminAuthService {
  private readonly failedLogins = new Map<string, { count: number; resetAt: number }>();
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string, clientIp: string) {
    const accountKey = `account:${createHash('sha256').update(email.toLowerCase()).digest('hex')}`;
    const throttleKeys = [`ip:${clientIp}`, accountKey];
    const attempts = throttleKeys.map((key) => this.failedLogins.get(key));
    if (attempts.some((entry) => entry && entry.resetAt > Date.now() && entry.count >= 5)) {
      throw new HttpException('Demasiados intentos. Intenta nuevamente en 15 minutos.', HttpStatus.TOO_MANY_REQUESTS);
    }
    for (const key of throttleKeys) {
      const entry = this.failedLogins.get(key);
      if (entry && entry.resetAt <= Date.now()) this.failedLogins.delete(key);
    }

    const admin = await this.prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() },
      include: { role: true },
    });

    if (!admin || !admin.active) {
      throttleKeys.forEach((key) => this.recordFailure(key));
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const passwordValid = await bcrypt.compare(password, admin.passwordHash);

    if (!passwordValid) {
      throttleKeys.forEach((key) => this.recordFailure(key));
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    this.failedLogins.delete(accountKey);

    const accessToken = await this.jwtService.signAsync(
      {
        sub: admin.id,
        role: admin.role.name,
        tokenType: 'ADMIN',
      },
      {
        audience: 'admin',
        algorithm: 'HS256',
      },
    );

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 300,
      administrator: {
        id: admin.id,
        fullName: admin.fullName,
        email: admin.email,
        role: admin.role.name,
      },
    };
  }

  private recordFailure(key: string) {
    const now = Date.now();
    if (this.failedLogins.size >= 10_000 && !this.failedLogins.has(key)) {
      for (const [storedKey, value] of this.failedLogins) {
        if (value.resetAt <= now) this.failedLogins.delete(storedKey);
      }
      if (this.failedLogins.size >= 10_000) {
        const oldestKey = this.failedLogins.keys().next().value;
        if (oldestKey) this.failedLogins.delete(oldestKey);
      }
    }
    const entry = this.failedLogins.get(key);
    if (!entry || entry.resetAt <= now) {
      this.failedLogins.set(key, { count: 1, resetAt: now + 15 * 60 * 1000 });
      return;
    }
    entry.count += 1;
  }
}
