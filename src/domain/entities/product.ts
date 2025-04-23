import { ProductCategory } from '../enums/ProductCategory'

export type Product = {
  id: string
  name: string
  type: string
  interestRate?: number
  category: ProductCategory
  riskLevel?: 'Low' | 'Medium' | 'High'
  performance?: number[]
}
