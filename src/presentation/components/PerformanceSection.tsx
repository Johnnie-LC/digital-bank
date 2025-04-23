'use client'

import PerformanceChart from '@/presentation/components/PerformanceChart'

type PerformanceSectionProps = {
  performance: number[]
}

export default function PerformanceSection({
  performance,
}: PerformanceSectionProps) {
  if (performance.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2 text-gray-900">
        Rendimiento histórico
      </h2>
      <PerformanceChart data={performance} />
    </div>
  )
}
