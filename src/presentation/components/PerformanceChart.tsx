'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type Props = {
  data: number[]
}

export default function PerformanceChart({ data }: Props) {
  const chartData = data.map((value, index) => ({
    name: `Mes ${index + 1}`,
    value,
  }))

  return (
    <div className="h-64 bg-gray-200 rounded-lg border">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              fontSize: '0.875rem',
            }}
            labelStyle={{ fontWeight: 'bold', color: '#4b5563' }}
            cursor={{
              stroke: '#3b82f6',
              strokeWidth: 1,
              strokeDasharray: '5 5',
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2.5}
            fill="url(#colorValue)"
            dot={{
              r: 4,
              stroke: '#2563eb',
              strokeWidth: 2,
              fill: '#fff',
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
