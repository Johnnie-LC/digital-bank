'use client'

import { ProductList } from '@/presentation/components/ProductList'
import { useProductList } from '@/presentation/hooks/useProductList'

export default function HomePage() {
  const { products } = useProductList()

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Nuestros Productos Financieros
      </h1>
      <ProductList products={products} />
    </main>
  )
}
