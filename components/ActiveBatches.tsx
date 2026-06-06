'use client'

import { Button } from '@/components/ui/button'
import { Calendar, User, MapPin, BookOpen } from 'lucide-react'

export function ActiveBatches() {
  const batches = [
    {
      subject: 'Data Structures & Algorithms',
      faculty: 'Dr. Rajesh Kumar',
      university: 'JNTUH',
      timing: 'Mon, Wed, Fri 7-8 PM',
      startDate: 'June 10, 2026',
      progress: 65,
      initials: 'DS',
      avatar: 'from-blue-400 to-blue-600',
    },
    {
      subject: 'Database Management Systems',
      faculty: 'Dr. Vikram Singh',
      university: 'JNTUK',
      timing: 'Tue, Thu 6-7:30 PM',
      startDate: 'June 12, 2026',
      progress: 45,
      initials: 'DB',
      avatar: 'from-green-400 to-green-600',
    },
    {
      subject: 'Web Development Bootcamp',
      faculty: 'Prof. Aisha Patel',
      university: 'OU',
      timing: 'Sat, Sun 5-7 PM',
      startDate: 'June 15, 2026',
      progress: 30,
      initials: 'WD',
      avatar: 'from-purple-400 to-purple-600',
    },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">My Active Batches</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 md:px-6 h-10 font-semibold text-sm md:text-base w-full sm:w-auto">
          Browse More Batches
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {batches.map((batch, index) => (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col h-full">
            <div className={`h-28 md:h-32 bg-gradient-to-br ${batch.avatar} flex items-center justify-center`}>
              <div className="text-3xl md:text-4xl font-bold text-white opacity-80">{batch.initials}</div>
            </div>

            <div className="p-4 md:p-6 space-y-4 flex-1 flex flex-col">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1 line-clamp-2">{batch.subject}</h3>
                <p className="text-blue-600 font-semibold text-xs md:text-sm">{batch.faculty}</p>
              </div>

              <div className="space-y-2 text-xs md:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="truncate">{batch.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">{batch.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span className="truncate">Started {batch.startDate}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Progress</span>
                  <span className="text-xs font-bold text-slate-900">{batch.progress}%</span>
                </div>
                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${batch.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-3 md:pt-4 border-t border-blue-100 mt-auto">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-8 md:h-9 text-xs md:text-sm font-semibold">
                  Join Live Class
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg h-8 md:h-9 text-xs md:text-sm font-semibold">
                  View Resources
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
