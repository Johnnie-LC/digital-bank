import { Product } from '@/domain/entities/product'
import { ProductMockRepository } from '@/infrastructure/ProductMockRepository'

export class GetProductById {
  constructor(private repository: ProductMockRepository) {}

  async execute(id: string): Promise<Product | null> {
    return await this.repository.getById(id)
  }
}
