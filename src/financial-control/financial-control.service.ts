import { Injectable } from '@nestjs/common';
import { FinancialControl } from '../entity/financial-control.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IFinancialControlSearch } from 'src/interfaces/financial-control-search';
import { IFinancialControlResult } from 'src/interfaces/financial-control-result';
import { IFinancialControlResponse } from 'src/interfaces/financial-control-response';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class FinancialControlService {

    constructor(
        @InjectRepository(FinancialControl)
        private readonly financialControlRepository: MongoRepository<FinancialControl>,
    ) {}

    async find(search: IFinancialControlSearch): Promise<IFinancialControlResponse> {

        const resp = await this.findAndCount(search)

        const response: IFinancialControlResponse = {
            data: resp.result,
            count: resp.total || 0,
            page: search.page,
            totalPage: Math.ceil(resp.total/search.limit),
            status: HttpStatus.OK
        }

        return response
    }

    private getSkipValue(limit: number, page: number) {

        page = page - 1
        limit = (limit) ? limit : 10
        return limit * page

    }

    private async findAndCount(obj: IFinancialControlSearch): Promise<IFinancialControlResult> {

        const skip = this.getSkipValue(obj.limit, obj.page)
        const searchObj = { take: obj.limit, skip }

        if (obj.search) {
            searchObj["where"] = {
                [obj.field]: obj.search
            }
            searchObj["order"] = {
                [obj.field]: "ASC"
            }
        }

        const [result, total] = await this.financialControlRepository.findAndCount(searchObj);

        return {
            result,
            total
        }

    }

}
