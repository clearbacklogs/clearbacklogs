'use client'

import { Bell, Search, LogOut, Settings, User } from 'lucide-react'
import { useState } from 'react'

export function FacultyTopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b-2 border-blue-100 flex items-center justify-between px-6 z-30">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-md ml-12 lg:ml-0">
        <Search className="h-5 w-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search batches, students..."
          className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-blue-50 rounded-lg transition-colors">
          <Bell className="h-5 w-5 text-slate-600 hover:text-blue-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              RK
            </div>
            <span className="hidden sm:block text-sm font-semibold text-slate-900">Dr. Rajesh</span>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-blue-100 rounded-xl shadow-lg p-2 z-40">
              <div className="px-4 py-3 border-b border-blue-100">
                <p className="font-bold text-slate-900">Dr. Rajesh Kumar</p>
                <p className="text-sm text-slate-600">Faculty Member</p>
              </div>
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg text-slate-700 flex items-center gap-2 transition-colors">
                <User className="h-4 w-4" /> My Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg text-slate-700 flex items-center gap-2 transition-colors">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg text-red-600 flex items-center gap-2 transition-colors">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
