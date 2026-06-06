'use client'

import { Users, FileText, CheckCircle, Zap } from 'lucide-react'

export function FacultyNotifications() {
  const notifications = [
    { icon: Users, type: 'Student Joined', message: 'Priya Sharma joined your Data Structures batch', time: '2 hours ago', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: CheckCircle, type: 'Payment Approved', message: 'Payment from Arjun Desai approved (₹3,000)', time: '5 hours ago', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: FileText, type: 'Batch Created', message: 'New batch "Web Development Bootcamp" created', time: '1 day ago', color: 'text-purple-600', bg: 'bg-purple-100' },
    { icon: Users, type: 'Student Joined', message: 'Rohan Patel enrolled in Database Systems', time: '2 days ago', color: 'text-blue-600', bg: 'bg-blue-100' },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Notifications</h2>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon
          return (
            <div key={index} className={`flex items-start gap-4 p-4 ${notification.bg} bg-opacity-50 rounded-lg border border-blue-100 hover:border-blue-300 transition-all`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${notification.bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${notification.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-sm">{notification.type}</p>
                <p className="text-slate-600 text-sm truncate">{notification.message}</p>
                <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
