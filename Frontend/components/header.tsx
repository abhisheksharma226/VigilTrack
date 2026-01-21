'use client'

import Link from 'next/link'
import { User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/report-missing', label: 'Report Missing' },
    { href: '/report-sighting', label: 'Report Sighting' },
    { href: '/matching', label: 'AI Matching', badge: 'NEW' },
    { href: '/cases', label: 'Cases' },
    { href: '/documents', label: 'Documentation' },
    { href: '/developers', label: 'Developers' },
    { href: '/help', label: 'Help' },
  ]

  return (
    <header className="relative border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl font-serif font-bold text-white">VT</div>
            <div className="hidden sm:block text-sm tracking-wider text-gray-400">VigilTrack</div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Desktop Sign In + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Sign In Button */}
            <Button variant="ghost" size="sm" className="gap-2 text-gray-400 hover:text-white hover:bg-transparent">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-800 mt-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 transition-colors duration-200 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
