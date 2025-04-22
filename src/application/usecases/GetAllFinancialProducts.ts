import { FinancialProduct } from '@/domain/entities/FinancialProducts'
import { IFinancialProductRepository } from '@/repositories/IFinancialProductRepository'

export class GetAllFinancialProducts {
  constructor(private repository: IFinancialProductRepository) {}

  async execute(): Promise<FinancialProduct[]> {
    return await this.repository.getAll()
  }
}
