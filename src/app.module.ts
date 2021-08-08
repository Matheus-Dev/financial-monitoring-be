import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialControlModule } from './financial-control/financial-control.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.MONGODB_CONNECTION_STRING,
            entities: [`${__dirname}/**/*.entity.{ts,js}`],
            synchronize: false,
            ssl: false,
            useUnifiedTopology: true,
            logging: true,
            useNewUrlParser: true
        }),
        FinancialControlModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
