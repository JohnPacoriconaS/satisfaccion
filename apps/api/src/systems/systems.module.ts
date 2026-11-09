import { Module } from '@nestjs/common';
import { SystemsController } from './systems.controller.js';
import { SystemsService } from './systems.service.js';
import { AdminAuthModule } from '../admin-auth/admin-auth.module.js';

@Module({
  imports: [AdminAuthModule],
  controllers: [SystemsController],
  providers: [SystemsService],
})
export class SystemsModule {}