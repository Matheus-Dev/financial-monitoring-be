import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialControl } from '../entity/financial-control.entity';
import { FinancialControlController } from './financial-control.controller';
import { FinancialControlService } from './financial-control.service';

@Module({
    imports: [TypeOrmModule.forFeature([ FinancialControl ])],
    controllers: [ FinancialControlController ],
    providers: [ FinancialControlService ]
})
export class FinancialControlModule {}
