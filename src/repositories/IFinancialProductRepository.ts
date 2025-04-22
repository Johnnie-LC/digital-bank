import { FinancialProduct } from '@/domain/entities/FinancialProducts'

export interface IFinancialProductRepository {
  getAll(): Promise<FinancialProduct[]>
  getById(id: string): Promise<FinancialProduct | undefined>
}
