'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-white tracking-tight"
          aria-label="Fintech logo"
        >
          DigitalBank
        </h1>
        <nav className="flex gap-6 text-sm text-gray-300 font-medium">
          <Link
            href="/"
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Inicio"
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Acerca"
          >
            Acerca
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Contacto"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
