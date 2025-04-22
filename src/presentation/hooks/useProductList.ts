import { GetAllFinancialProducts } from '@/application/usecases/GetAllFinancialProducts'
import { FinancialProduct } from '@/domain/entities/FinancialProducts'
import { FinancialProductMockRepository } from '@/infrastructure/FinancialProductMockRepository'
import { useEffect, useState } from 'react'

export const useProductList = () => {
  const [products, setProducts] = useState<FinancialProduct[]>([])

  useEffect(() => {
    const useCase = new GetAllFinancialProducts(
      new FinancialProductMockRepository()
    )
    useCase.execute().then(setProducts)
  }, [])

  return { products }
}
