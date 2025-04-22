'use client'

import { FinancialProduct } from '@/domain/entities/FinancialProducts'
import Link from 'next/link'

type Props = {
  product: FinancialProduct
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.type}</p>
      {product.interestRate && <p>Tasa: {product.interestRate}%</p>}
      {product.riskLevel && <p>Riesgo: {product.riskLevel}</p>}
      <Link
        href={`/product/${product.id}`}
        className="text-blue-600 hover:underline block mt-2"
        aria-label={`Ver detalles de ${product.name}`}
      >
        Ver detalles →
      </Link>
    </div>
  )
}
