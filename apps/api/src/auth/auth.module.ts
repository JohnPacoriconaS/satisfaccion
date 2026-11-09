import { Module } from '@nestjs/common';
import { StudentJwtGuard } from './guards/student-jwt.guard.js';

@Module({
  providers: [StudentJwtGuard],
  exports: [StudentJwtGuard],
})
export class AuthModule {}