'use client'

import { useParams } from 'next/navigation'
import { useProduct } from '@/presentation/hooks/useProduct'
import BackButton from '@/presentation/components/BackButton'
import ProductDetails from '@/presentation/components/ProductDetails'
import PerformanceSection from '@/presentation/components/PerformanceSection'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = useProduct(id as string)

  if (!product) return <p className="p-4">Cargando producto...</p>

  return (
    <main className="p-4">
      <BackButton />

      <section
        className="bg-gray-200 shadow-lg rounded-xl p-6 max-w-3xl mx-auto"
        aria-labelledby="product-title"
      >
        <ProductDetails product={product} />
        <PerformanceSection performance={product.performance || []} />
      </section>
    </main>
  )
}
