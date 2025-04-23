'use client'

import { useEffect, useState } from 'react'
import { GetProductById } from '@/application/usecases/GetProductById'
import { ProductMockRepository } from '@/infrastructure/ProductMockRepository'
import { Product } from '@/domain/entities/product'

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const useCase = new GetProductById(new ProductMockRepository())
    useCase.execute(id).then(setProduct)
  }, [id])

  return product
}
