import { FinancialProduct } from '@/domain/entities/FinancialProducts'

export const mockProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'Cuenta Ahorros Plus',
    type: 'Cuenta de Ahorros',
    interestRate: 3.5,
    category: 'cuenta',
    description: 'Cuenta con rendimientos mensuales.',
  },
  {
    id: '2',
    name: 'Tarjeta Platinum',
    type: 'Tarjeta de Crédito',
    category: 'tarjeta',
    description: 'Tarjeta con beneficios internacionales.',
    riskLevel: 'medio',
  },
  //TODO: agrega más...
]

export class FinancialProductMockRepository {
  async getAll(): Promise<FinancialProduct[]> {
    return Promise.resolve(mockProducts)
  }

  async getById(id: string): Promise<FinancialProduct | undefined> {
    return Promise.resolve(mockProducts.find((p) => p.id === id))
  }
}
