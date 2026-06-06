'use client'

import { BookOpen, Users, TrendingUp, Clock } from 'lucide-react'

export function FacultyDashboardCards() {
  const cards = [
    {
      icon: BookOpen,
      label: 'Active Batches',
      value: '5',
      description: '2 starting this week',
      bgGradient: 'from-blue-100 to-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      icon: Users,
      label: 'Total Students',
      value: '127',
      description: '15 new this month',
      bgGradient: 'from-green-100 to-green-200',
      iconColor: 'text-green-600',
    },
    {
      icon: TrendingUp,
      label: 'Monthly Earnings',
      value: '₹45,000',
      description: '+12% from last month',
      bgGradient: 'from-purple-100 to-purple-200',
      iconColor: 'text-purple-600',
    },
    {
      icon: Clock,
      label: 'Upcoming Classes',
      value: '8',
      description: 'This week',
      bgGradient: 'from-orange-100 to-orange-200',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-4 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-3 md:mb-4 flex-shrink-0`}>
              <Icon className={`h-6 w-6 md:h-7 md:w-7 ${card.iconColor}`} />
            </div>
            <p className="text-slate-600 text-xs md:text-sm font-semibold mb-1">{card.label}</p>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{card.value}</p>
            <p className="text-xs text-slate-500">{card.description}</p>
          </div>
        )
      })}
    </div>
  )
}
