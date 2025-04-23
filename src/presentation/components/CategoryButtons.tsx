'use client'

import { ProductCategory } from '@/domain/enums/ProductCategory'

type CategoryButtonsProps = {
  selected: ProductCategory | null
  onSelect: (category: ProductCategory | null) => void
}

export default function CategoryButtons({
  selected,
  onSelect,
}: CategoryButtonsProps) {
  const categories = Object.values(ProductCategory)

  return (
    <div className="flex gap-2 my-4 overflow-x-auto">
      <button
        className={`px-3 py-1 rounded-full border ${
          !selected ? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => onSelect(null)}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded-full border ${
            selected === cat ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
