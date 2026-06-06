'use client'

import { UserPlus, Plus, CheckCircle, DollarSign } from 'lucide-react'

export function AdminRecentActivities() {
  const activities = [
    {
      icon: UserPlus,
      title: 'New Student Registration',
      description: 'Priya Sharma registered for Data Structures batch',
      timestamp: '2 hours ago',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Plus,
      title: 'New Batch Created',
      description: 'Dr. Rajesh Kumar created "Advanced Algorithms" batch',
      timestamp: '5 hours ago',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: CheckCircle,
      title: 'Faculty Approved',
      description: 'Prof. Aisha Patel verified and approved for teaching',
      timestamp: '1 day ago',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: DollarSign,
      title: 'Payment Approved',
      description: 'Arjun Desai payment of ₹2,500 verified and confirmed',
      timestamp: '1 day ago',
      color: 'from-orange-400 to-orange-600',
    },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={index} className="flex gap-4 p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center flex-shrink-0`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{activity.title}</p>
                <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                <p className="text-xs text-slate-500 mt-2">{activity.timestamp}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
