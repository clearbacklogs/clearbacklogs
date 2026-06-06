'use client'

import { LayoutDashboard, Users, BookOpen, Grid3x3, DollarSign, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function AdminSidebar() {
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
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Students', href: '/admin/students' },
    { icon: BookOpen, label: 'Faculty', href: '/admin/faculty' },
    { icon: Grid3x3, label: 'Batches', href: '/admin/batches' },
    { icon: DollarSign, label: 'Payments', href: '/admin/payments' },
    { icon: BarChart3, label: 'Reports', href: '/admin/reports' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      <button
        className="hidden md:hidden fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className={`${isOpen ? 'translate-x-0 w-64' : isMobile ? '-translate-x-full w-64' : 'w-20'} ${isMobile ? 'fixed' : 'sticky'} top-0 inset-y-0 left-0 h-screen bg-white border-r border-blue-100 z-40 transition-all duration-300 flex flex-col shadow-lg md:shadow-none`}>
        <div className="p-6 border-b border-blue-100">
          <h1 className="text-2xl font-bold text-slate-900">Admin Panel</h1>
          <p className="text-sm text-slate-600 mt-1">ClearBacklogs Management</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
              >
                <Icon className="h-5 w-5 group-hover:text-blue-600" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-blue-100">
          <Link href="/">
            <Button
              size="sm"
              className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
