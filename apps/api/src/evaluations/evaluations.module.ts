import { Module } from '@nestjs/common';
import { EvaluationsController } from './evaluations.controller.js';
import { EvaluationsService } from './evaluations.service.js';
import { StudentJwtGuard } from '../auth/guards/student-jwt.guard.js';
import { AdminAuthModule } from '../admin-auth/admin-auth.module.js';

@Module({
  imports: [AdminAuthModule],
  controllers: [EvaluationsController],
  providers: [EvaluationsService, StudentJwtGuard],
})
export class EvaluationsModule {}
