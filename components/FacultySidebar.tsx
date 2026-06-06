'use client'

import { LayoutDashboard, BookOpen, Users, FileText, TrendingUp, User, LogOut, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function FacultySidebar() {
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
    { icon: LayoutDashboard, label: 'Dashboard', href: '/faculty/dashboard' },
    { icon: BookOpen, label: 'My Batches', href: '/faculty/batches' },
    { icon: Users, label: 'Students', href: '/faculty/students' },
    { icon: FileText, label: 'Learning Resources', href: '/faculty/resources' },
    { icon: TrendingUp, label: 'Earnings', href: '/faculty/earnings' },
    { icon: User, label: 'Profile', href: '/faculty/profile' },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:hidden fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0 w-64' : isMobile ? '-translate-x-full w-64' : 'w-20'} ${isMobile ? 'fixed' : 'sticky'} left-0 top-0 h-screen bg-white border-r-2 border-blue-100 flex flex-col transition-all duration-300 z-40 shadow-lg md:shadow-none overflow-hidden`}>
        {/* Logo */}
        <div className="p-4 md:p-6 border-b-2 border-blue-100">
          <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="font-bold text-white text-sm">CB</span>
            </div>
            {(isOpen || isMobile) && <span className="font-bold text-lg text-slate-900">ClearBacklogs</span>}
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all group"
              >
                <Icon className="h-5 w-5 group-hover:text-blue-600" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t-2 border-blue-100">
          <Link href="/">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 transition-all group font-medium">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
