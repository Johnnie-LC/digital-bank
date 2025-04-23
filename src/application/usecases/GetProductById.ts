import { Product } from '@/domain/entities/product'
import { ProductRepository } from '@/repositories/ProductRepository'

export class GetProductById {
  constructor(private repository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return await this.repository.getById(id)
  }
}
