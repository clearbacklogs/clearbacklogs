'use client'

import { TrendingUp, Users, BookOpen, Award } from 'lucide-react'

export function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Faculty',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: TrendingUp,
      number: '100+',
      label: 'Batches',
      color: 'from-blue-400 to-green-500',
    },
    {
      icon: Award,
      number: '90%',
      label: 'Success Rate',
      color: 'from-emerald-500 to-teal-600',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-all mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
