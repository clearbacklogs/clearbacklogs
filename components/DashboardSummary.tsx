'use client'

import { BookOpen, Zap, Calendar, FileText } from 'lucide-react'

export function DashboardSummary() {
  const cards = [
    {
      title: 'Enrolled Subjects',
      value: '4',
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Batches',
      value: '3',
      icon: Zap,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Upcoming Classes',
      value: '5',
      icon: Calendar,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Resources Available',
      value: '24',
      icon: FileText,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-4 md:p-6 space-y-4 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col justify-between">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-slate-600 font-medium">{card.title}</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
