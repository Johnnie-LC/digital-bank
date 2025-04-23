'use client'

import { Product } from '@/domain/entities/product'
import Link from 'next/link'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="p-4 bg-gray-600 shadow rounded hover:shadow-lg transition flex flex-col h-full"
      aria-label={`Producto ${product.name}`}
    >
      <div className="mb-3">
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.type}</p>
        {product.interestRate && (
          <p className="text-sm">Tasa de interés: {product.interestRate}%</p>
        )}
        <p className="text-sm">Categoría: {product.category}</p>
        {product.riskLevel && (
          <p className="text-sm">Riesgo: {product.riskLevel}</p>
        )}
      </div>

      <Link
        href={`/product/${product.id}`}
        className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Ver detalles del producto ${product.name}`}
      >
        Ver Detalles
      </Link>
    </div>
  )
}
