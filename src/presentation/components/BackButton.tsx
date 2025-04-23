'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  mb-4"
      onClick={() => router.back()}
      aria-label="Volver al catálogo"
    >
      ← Volver
    </button>
  )
}
