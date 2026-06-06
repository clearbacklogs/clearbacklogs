'use client'

import { LayoutDashboard, BookOpen, Search, FileText, CreditCard, User, LogOut, ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (mobile) setIsOpen(false)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'My Batches', icon: BookOpen, href: '/dashboard/batches' },
    { name: 'Find Batches', icon: Search, href: '/find-batches' },
    { name: 'Learning Resources', icon: FileText, href: '/dashboard/resources' },
    { name: 'Payments', icon: CreditCard, href: '/dashboard/payments' },
    { name: 'Profile', icon: User, href: '/dashboard/profile' },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:hidden fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`${
        isOpen ? 'translate-x-0 w-64' : isMobile ? '-translate-x-full w-64' : 'w-20'
      } ${isMobile ? 'fixed' : 'sticky'} top-0 h-screen bg-white border-r border-blue-100 transition-all duration-300 flex flex-col z-40 shadow-lg md:shadow-none`}>
        <div className="p-4 md:p-6 border-b border-blue-100 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!isOpen && !isMobile && 'hidden'}`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-white text-sm">CB</span>
            </div>
            {(isOpen || isMobile) && <span className="font-bold text-slate-900 text-sm md:text-base">ClearBacklogs</span>}
          </div>
          {!isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform ${!isOpen && 'rotate-180'}`} />
            </button>
          )}
        </div>

        <nav className="flex-1 p-3 md:p-4 space-y-1 md:space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:bg-blue-50'
                }`}
                title={!isOpen && !isMobile ? item.name : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {(isOpen || isMobile) && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 md:p-4 border-t border-blue-100">
          <Link href="/">
            <button className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all w-full text-sm md:text-base" onClick={handleNavClick}>
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {(isOpen || isMobile) && <span>Logout</span>}
            </button>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30"
        />
      )}
    </>
  )
}
