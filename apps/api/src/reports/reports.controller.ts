import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service.js';
import { AdminJwtGuard } from '../admin-auth/guards/admin-jwt.guard.js';

@Controller('reports')
@UseGuards(AdminJwtGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('overview')
  overview() {
    return this.reportsService.overview();
  }

  @Get('systems')
  systemsReport() {
    return this.reportsService.systemsReport();
  }

  @Get('ratings')
  ratingsReport() {
    return this.reportsService.ratingsReport();
  }
}