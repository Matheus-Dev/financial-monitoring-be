import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialControlModule } from './financial-control/financial-control.module';
import { MongoserviceService } from './services/mongo/mongoservice.service';

@Module({
  imports: [FinancialControlModule],
  controllers: [AppController],
  providers: [AppService, MongoserviceService],
})
export class AppModule {}
