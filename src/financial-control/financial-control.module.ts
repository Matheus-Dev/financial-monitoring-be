import { Module } from '@nestjs/common';
import { FinancialControlController } from './financial-control.controller';

@Module({
  controllers: [FinancialControlController]
})
export class FinancialControlModule {}
