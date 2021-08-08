import { FinancialControl } from "src/entity/financial-control.entity";

export interface IFinancialControlResponse{
    status: number
    data: FinancialControl[]
    count: number
    page: number
    totalPage: number
}