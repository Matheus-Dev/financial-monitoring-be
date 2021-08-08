import { Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query, UsePipes } from '@nestjs/common';
import { IFinancialControlSearch } from 'src/interfaces/financial-control-search';
import { FinancialControlPipe } from 'src/pipes/financial-control.pipe';
import { FinancialControlService } from './financial-control.service';

@Controller('financial-control')
export class FinancialControlController {

    constructor(private readonly service: FinancialControlService){}

    @UsePipes(new FinancialControlPipe())
    @Get('search')
    public getBySearch (
        @Query() search: IFinancialControlSearch) {
        return this.service.find(search)
    }

}
