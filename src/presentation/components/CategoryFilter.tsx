'use client'

import { ProductCategory } from '@/domain/enums/ProductCategory'
import { useIsMobile } from '@/presentation/hooks/useIsMobile'
import CategorySelect from '@/presentation/components/CategorySelect'
import CategoryButtons from '@/presentation/components/CategoryButtons'

type CategoryFilterProps = {
  selected: ProductCategory | null
  onSelect: (category: ProductCategory | null) => void
}

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  const isMobile = useIsMobile()

  return isMobile ? (
    <CategorySelect selected={selected} onSelect={onSelect} />
  ) : (
    <CategoryButtons selected={selected} onSelect={onSelect} />
  )
}
