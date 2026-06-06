'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Batches', href: '#batches' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-sm">CB</span>
          </div>
          <span className={`font-bold text-lg hidden sm:block transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            ClearBacklogs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-slate-900" />
          ) : (
            <Menu className="h-6 w-6 text-slate-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-4 space-y-4 container mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <Link href="/login" className="flex-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register" className="flex-1">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
