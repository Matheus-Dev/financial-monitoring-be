import { FinancialControl } from "src/entity/financial-control.entity";

export interface IFinancialControlResult {
    result: FinancialControl[]
    total: number
}