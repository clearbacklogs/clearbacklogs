'use client'

import { Bell, Search, ChevronDown } from 'lucide-react'

export function DashboardTopNav() {
  return (
    <div className="bg-white border-b border-blue-100 sticky top-0 z-40">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search batches, resources..."
              className="w-full pl-10 pr-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-slate-900"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative p-2 hover:bg-blue-50 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-blue-100">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">Priya Sharma</p>
              <p className="text-xs text-slate-500">B.Tech CSE</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
              PS
            </div>
            <ChevronDown className="w-4 h-4 text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
