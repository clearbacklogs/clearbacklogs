'use client'

import { Users, BookOpen, Grid3x3, TrendingUp } from 'lucide-react'

export function AdminDashboardStats() {
  const stats = [
    {
      icon: Users,
      label: 'Total Students',
      value: '5,427',
      change: '+12% from last month',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: BookOpen,
      label: 'Total Faculty',
      value: '542',
      change: '+8% from last month',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Grid3x3,
      label: 'Active Batches',
      value: '128',
      change: '+5 new batches this month',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: TrendingUp,
      label: 'Monthly Revenue',
      value: '₹24,50,000',
      change: '+18% from last month',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-4 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${stat.bgColor} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`h-5 w-5 md:h-6 md:w-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </div>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-600 mb-1">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.change}</p>
          </div>
        )
      })}
    </div>
  )
}
