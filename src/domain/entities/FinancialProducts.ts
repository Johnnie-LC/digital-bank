export type FinancialProduct = {
  id: string
  name: string
  type: string
  interestRate?: number
  category: 'cuenta' | 'tarjeta' | 'fondo' | 'seguro'
  riskLevel?: 'bajo' | 'medio' | 'alto'
  description: string
}
