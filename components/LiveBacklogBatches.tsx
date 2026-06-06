'use client'

import { Button } from '@/components/ui/button'
import { Clock, Users, Zap } from 'lucide-react'

export function LiveBacklogBatches() {
  const batches = [
    {
      name: 'Java Programming Intensive',
      subject: 'Object-Oriented Programming',
      schedule: 'Mon, Wed, Fri 7-8 PM',
      students: 24,
      seats: 30,
      level: 'Beginner to Intermediate',
      startDate: 'June 10, 2026',
      icon: '☕',
    },
    {
      name: 'Database Masters',
      subject: 'SQL & DBMS Crash Course',
      schedule: 'Tue, Thu 6-7:30 PM',
      students: 28,
      seats: 30,
      level: 'Intermediate',
      startDate: 'June 12, 2026',
      icon: '🗄️',
    },
    {
      name: 'Web Development Bootcamp',
      subject: 'HTML, CSS, JavaScript & React',
      schedule: 'Sat, Sun 5-7 PM',
      students: 31,
      seats: 30,
      level: 'Beginner',
      startDate: 'June 15, 2026',
      icon: '🌐',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Live Backlog Batches</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join group batches with other students and learn from expert instructors in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {batches.map((batch, index) => (
            <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl">{batch.icon}</div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">{batch.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{batch.subject}</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">{batch.schedule}</p>
                      <p className="text-xs text-slate-600 mt-1">Starting {batch.startDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Users className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{batch.students} of {batch.seats} students</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full">
                      {batch.level}
                    </span>
                  </div>
                </div>

                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${(batch.students / batch.seats) * 100}%` }}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-semibold shadow-md hover:shadow-lg transition-all">
                  {batch.students >= batch.seats ? 'Join Waitlist' : 'Join Batch'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Start Your Batch Journey Today</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Pick a batch that matches your schedule and study pace. Get support from batch mates and expert faculty.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all">
            View All Batches
          </Button>
        </div>
      </div>
    </section>
  )
}
