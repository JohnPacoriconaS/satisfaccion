import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';
import { AdminAuthModule } from '../admin-auth/admin-auth.module.js';

@Module({
  imports: [AdminAuthModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
