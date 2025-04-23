import { Product } from '@/domain/entities/product'
import { ProductMockRepository } from '@/infrastructure/ProductMockRepository'

export class GetAllProducts {
  constructor(private repository: ProductMockRepository) {}

  async execute(): Promise<Product[]> {
    return await this.repository.getAll()
  }
}
