import { Product } from '@/domain/entities/product'
import { ProductCategory } from '@/domain/enums/ProductCategory'
import { ProductRepository } from '@/repositories/ProductRepository'

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cuenta Ahorros Digital',
    type: 'Savings',
    interestRate: 2.5,
    category: ProductCategory.Accounts,
    riskLevel: 'Low',
  },
  {
    id: '2',
    name: 'Tarjeta Visa Joven',
    type: 'Credit Card',
    category: ProductCategory.Cards,
    riskLevel: 'Medium',
  },
  {
    id: '3',
    name: 'Fondo de Inversión Sostenible',
    type: 'Investment Fund',
    interestRate: 7.8,
    category: ProductCategory.Funds,
    riskLevel: 'High',
    performance: [10, 80, 60, 10, 80, 60, 10, 80, 60],
  },
  {
    id: '4',
    name: 'Cuenta Ahorros Digital',
    type: 'Savings',
    interestRate: 2.5,
    category: ProductCategory.Accounts,
    riskLevel: 'Low',
  },
  {
    id: '5',
    name: 'Tarjeta Visa Joven',
    type: 'Credit Card',
    category: ProductCategory.Cards,
    riskLevel: 'Medium',
  },
  {
    id: '6',
    name: 'Fondo de Inversión Sostenible',
    type: 'Investment Fund',
    interestRate: 7.8,
    category: ProductCategory.Funds,
    riskLevel: 'High',
    performance: [1, 5, 6],
  },
  {
    id: '7',
    name: 'Cuenta Ahorros Digital',
    type: 'Savings',
    interestRate: 2.5,
    category: ProductCategory.Accounts,
    riskLevel: 'Low',
  },
  {
    id: '8',
    name: 'Tarjeta Visa Joven',
    type: 'Credit Card',
    category: ProductCategory.Cards,
    riskLevel: 'Medium',
  },
  {
    id: '9',
    name: 'Fondo de Inversión Sostenible',
    type: 'Investment Fund',
    interestRate: 7.8,
    category: ProductCategory.Insurance,
    riskLevel: 'High',
    performance: [1, 5, 6],
  },
  {
    id: '10',
    name: 'Cuenta Ahorros Digital',
    type: 'Savings',
    interestRate: 2.5,
    category: ProductCategory.Accounts,
    riskLevel: 'Low',
  },
  {
    id: '11',
    name: 'Tarjeta Visa Joven',
    type: 'Credit Card',
    category: ProductCategory.Cards,
    riskLevel: 'Medium',
  },
  {
    id: '12',
    name: 'Fondo de Inversión Sostenible',
    type: 'Investment Fund',
    interestRate: 7.8,
    category: ProductCategory.Insurance,
    riskLevel: 'High',
    performance: [1, 5, 6],
  },
]

export class ProductMockRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    return mockProducts
  }

  async getById(id: string): Promise<Product | null> {
    return mockProducts.find((p) => p.id === id) || null
  }
}
