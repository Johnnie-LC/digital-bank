'use client'

import { ProductCategory } from '@/domain/enums/ProductCategory'

type Props = {
  selected: ProductCategory | null
  onSelect: (category: ProductCategory | null) => void
}

export default function CategorySelect({ selected, onSelect }: Props) {
  const categories = Object.values(ProductCategory)

  return (
    <div className="my-4">
      <label htmlFor="category-select" className="sr-only">
        Filtrar por categoría
      </label>
      <select
        id="category-select"
        className="w-full p-2 rounded border"
        value={selected || ''}
        onChange={(e) =>
          onSelect(
            e.target.value === '' ? null : (e.target.value as ProductCategory)
          )
        }
      >
        <option value="">Todos</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}
