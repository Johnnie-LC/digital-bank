import { Product } from '@/domain/entities/product'
import { ProductRepository } from '@/repositories/ProductRepository'

export class GetAllProducts {
  constructor(private repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.repository.getAll()
  }
}
