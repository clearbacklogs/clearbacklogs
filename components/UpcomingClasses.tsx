'use client'

import { Button } from '@/components/ui/button'
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export function UpcomingClasses() {
  const classes = [
    {
      subject: 'Data Structures',
      faculty: 'Dr. Rajesh Kumar',
      date: 'Today',
      time: '7:00 PM - 8:00 PM',
      status: 'live',
    },
    {
      subject: 'Database Management',
      faculty: 'Dr. Vikram Singh',
      date: 'Tomorrow',
      time: '6:00 PM - 7:30 PM',
      status: 'upcoming',
    },
    {
      subject: 'Web Development',
      faculty: 'Prof. Aisha Patel',
      date: 'Jun 8, 2026',
      time: '5:00 PM - 7:00 PM',
      status: 'upcoming',
    },
    {
      subject: 'Calculus & Linear Algebra',
      faculty: 'Prof. Aisha Patel',
      date: 'Jun 10, 2026',
      time: '6:00 PM - 7:30 PM',
      status: 'upcoming',
    },
    {
      subject: 'Operating Systems',
      faculty: 'Dr. Vikram Singh',
      date: 'Jun 12, 2026',
      time: '7:00 PM - 8:00 PM',
      status: 'completed',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 text-red-700'
      case 'upcoming':
        return 'bg-blue-100 text-blue-700'
      case 'completed':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-slate-100 text-slate-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <AlertCircle className="w-4 h-4" />
      case 'upcoming':
        return <Calendar className="w-4 h-4" />
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">Upcoming Classes</h2>

      <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden">
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full px-4 md:px-0">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-blue-100">
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-slate-900">Subject</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-slate-900">Faculty</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-slate-900">Date & Time</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-slate-900">Status</th>
                <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
                <tr key={index} className="border-b border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <p className="font-semibold text-slate-900 text-xs md:text-sm">{cls.subject}</p>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <p className="text-slate-600 text-xs md:text-sm truncate">{cls.faculty}</p>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-medium text-slate-900">{cls.date}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{cls.time}</span>
                      </p>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    <div className={`inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cls.status)}`}>
                      {getStatusIcon(cls.status)}
                      <span className="hidden sm:inline">{cls.status.charAt(0).toUpperCase() + cls.status.slice(1)}</span>
                      <span className="sm:hidden">{cls.status.charAt(0).toUpperCase()}</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4">
                    {cls.status === 'live' ? (
                      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-2 md:px-4 h-7 md:h-8 text-xs md:text-sm font-semibold">
                        Join Now
                      </Button>
                    ) : cls.status === 'upcoming' ? (
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-2 md:px-4 h-7 md:h-8 text-xs md:text-sm font-semibold">
                        Set Reminder
                      </Button>
                    ) : (
                      <Button variant="outline" className="border-2 border-slate-300 text-slate-600 rounded-lg px-2 md:px-4 h-7 md:h-8 text-xs md:text-sm font-semibold" disabled>
                        Completed
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
      </div>
    </div>
  )
}
