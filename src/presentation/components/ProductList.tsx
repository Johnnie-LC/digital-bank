import { FinancialProduct } from '@/domain/entities/FinancialProducts'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: FinancialProduct[]
}

export const ProductList = ({ products }: ProductListProps) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)
