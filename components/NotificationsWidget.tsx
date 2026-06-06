'use client'

import { Bell, FileText, Clock, CheckCircle2, Zap } from 'lucide-react'

export function NotificationsWidget() {
  const notifications = [
    {
      type: 'resource',
      title: 'New Resource Added',
      message: 'Dr. Rajesh Kumar uploaded "Advanced DSA Techniques" for Data Structures batch',
      time: '2 hours ago',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      type: 'class',
      title: 'Class Reminder',
      message: 'Database Management class starts in 2 hours with Dr. Vikram Singh',
      time: '30 minutes ago',
      icon: Clock,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      type: 'payment',
      title: 'Payment Approved',
      message: 'Your payment of ₹3,500 for Web Development batch has been approved',
      time: '5 hours ago',
      icon: CheckCircle2,
      color: 'bg-green-100 text-green-600',
    },
    {
      type: 'batch',
      title: 'New Batch Available',
      message: 'Join "System Design Masterclass" batch starting Jun 20, 2026',
      time: '1 day ago',
      icon: Zap,
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Bell className="w-6 h-6 text-blue-600" />
          Recent Notifications
        </h2>
      </div>

      <div className="space-y-3">
        {notifications.map((notif, index) => {
          const Icon = notif.icon
          return (
            <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
              <div className={`${notif.color} p-3 rounded-lg flex-shrink-0 h-fit`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900">{notif.title}</p>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{notif.message}</p>
                <p className="text-xs text-slate-500 mt-2">{notif.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
