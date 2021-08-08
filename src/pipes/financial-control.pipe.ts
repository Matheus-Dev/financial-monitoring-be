import { PipeTransform, Injectable, ArgumentMetadata, DefaultValuePipe } from '@nestjs/common';
import { FinancialControlConstants } from 'src/constants/financial-control.constants';
import { IFinancialControlSearch } from 'src/interfaces/financial-control-search';

@Injectable()
export class FinancialControlPipe implements PipeTransform {
    public transform(value: any, metadata: ArgumentMetadata) {

        const parameters: IFinancialControlSearch = {}
        parameters.field = (value?.field) ? value.field : FinancialControlConstants.FINANCIAL_CONTROL_DEFAULT_SEARCH_FIELD
        parameters.page = (value?.page) ? Number(value.page) : FinancialControlConstants.FINANCIAL_CONTROL_DEFAULT_PAGE
        parameters.limit = (value?.limit) ? Number(value.limit) : FinancialControlConstants.FINANCIAL_CONTROL_DEFAULT_LIMIT
        parameters.search = value?.search

        return parameters
    }
}
