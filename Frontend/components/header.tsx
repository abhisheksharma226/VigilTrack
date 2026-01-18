'use client'

import Link from 'next/link'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="relative border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl font-serif font-bold text-white">MP</div>
            <div className="hidden sm:block text-sm tracking-wider text-gray-400">FINDER</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '/report-missing', label: 'Report Missing' },
              { href: '/report-sighting', label: 'Report Sighting' },
              { href: '/cases', label: 'Cases' },
              { href: '/documents', label: 'Documents' },
              { href: '/developers', label: 'Developers' },
              { href: '/help', label: 'Help' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sign In Button */}
          <Button variant="ghost" size="sm" className="gap-2 text-gray-400 hover:text-white hover:bg-transparent">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
