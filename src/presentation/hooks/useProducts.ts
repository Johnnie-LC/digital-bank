import { useEffect, useState } from 'react'
import { GetAllProducts } from '@/application/usecases/GetAllProducts'
import { ProductMockRepository } from '@/infrastructure/ProductMockRepository'
import { Product } from '@/domain/entities/product'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const useCase = new GetAllProducts(new ProductMockRepository())

    useCase
      .execute()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts)
        setIsLoading(false)
      })
      .catch(() => {
        setErrorMessage('Error al cargar los productos')
        setIsError(true)
        setIsLoading(false)
      })
  }, [])

  return { products, isLoading, isError, errorMessage }
}
