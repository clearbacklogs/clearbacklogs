'use client'

import { TrendingUp, Users, BookOpen, Grid3x3 } from 'lucide-react'

export function AdminReports() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Revenue Analytics</h3>
        <div className="bg-white border-2 border-blue-100 rounded-xl p-8">
          <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-600 font-semibold">Revenue Chart</p>
              <p className="text-sm text-slate-500">Graph visualization would appear here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Student Growth</p>
              <p className="text-2xl font-bold text-slate-900">+12%</p>
              <p className="text-xs text-slate-500">vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Faculty Growth</p>
              <p className="text-2xl font-bold text-slate-900">+8%</p>
              <p className="text-xs text-slate-500">vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
              <Grid3x3 className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Batch Enrollment</p>
              <p className="text-2xl font-bold text-slate-900">+5 new</p>
              <p className="text-xs text-slate-500">this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-100 rounded-xl p-8">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Detailed Analytics</h4>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold">Analytics Dashboard</p>
            <p className="text-sm text-slate-500">Detailed trends and statistics</p>
          </div>
        </div>
      </div>
    </div>
  )
}
