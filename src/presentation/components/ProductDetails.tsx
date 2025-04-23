'use client'

import { Product } from '@/domain/entities/product'

type Props = {
  product: Product
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="grid gap-2 text-gray-700 text-base">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">{product.name}</h1>
      <p className="text-sm text-gray-500 mb-4">{product.type}</p>

      {product.interestRate && (
        <p>
          <strong>Tasa de interés:</strong> {product.interestRate}%
        </p>
      )}
      <p>
        <strong>Categoría:</strong> {product.category}
      </p>
      {product.riskLevel && (
        <p>
          <strong>Nivel de riesgo:</strong> {product.riskLevel}
        </p>
      )}
    </div>
  )
}
