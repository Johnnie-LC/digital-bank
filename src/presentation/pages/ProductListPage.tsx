'use client'

import { useState } from 'react'
import { ProductCategory } from '@/domain/enums/ProductCategory'
import { useProducts } from '@/presentation/hooks/useProducts'
import ProductGrid from '../components/ProductGrid'
import CategoryFilter from '../components/CategoryFilter'
import CatalogHeader from '../components/CatalogHeader'
import withLoading from '../hoc/withLoading'

const ProductGridWithLoading = withLoading(ProductGrid)

export default function ProductListPage() {
  const [category, setCategory] = useState<ProductCategory | null>(null)
  const { products, isLoading, isError, errorMessage } = useProducts()

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  return (
    <main className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <CatalogHeader />

      <section className="mb-4">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </section>

      <ProductGridWithLoading
        products={filtered}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </main>
  )
}
