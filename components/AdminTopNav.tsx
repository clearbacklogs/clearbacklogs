'use client'

import { Search, Bell, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AdminTopNav() {
  return (
    <div className="bg-white border-b border-blue-100 sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search students, faculty, batches..."
              className="w-full pl-10 pr-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-blue-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold">
              AP
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Admin Panel</p>
              <p className="text-xs text-slate-600">Administrator</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
