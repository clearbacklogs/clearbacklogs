'use client'

import { Button } from '@/components/ui/button'
import { Star, Award } from 'lucide-react'

export function FindFaculty() {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Data Structures & Algorithms',
      rating: 4.9,
      students: 1250,
      degree: 'B.Tech, M.Tech',
      initials: 'RK',
      avatar: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Prof. Aisha Patel',
      subject: 'Calculus & Linear Algebra',
      rating: 4.8,
      students: 980,
      degree: 'B.Tech, MBA',
      initials: 'AP',
      avatar: 'from-green-400 to-green-600',
    },
    {
      name: 'Dr. Vikram Singh',
      subject: 'Database Management Systems',
      rating: 4.9,
      students: 1150,
      degree: 'B.Tech, MCA',
      initials: 'VS',
      avatar: 'from-purple-400 to-purple-600',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Find Faculty</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with highly-rated professors specialized in your backlog subject.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((prof, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${prof.avatar} rounded-2xl p-8 mb-6 h-40 flex items-center justify-center shadow-lg`}>
                <div className="text-5xl font-bold text-white opacity-90">{prof.initials}</div>
              </div>

              <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 space-y-4 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{prof.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mt-1">{prof.subject}</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-slate-900">{prof.rating}</span>
                  </div>
                  <span className="text-slate-600">({prof.students}+ students)</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Award className="h-4 w-4 text-green-600" />
                  <span>Teaches: {prof.degree}</span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-semibold shadow-md hover:shadow-lg transition-all">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Button
            size="lg"
            className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-lg font-semibold px-8 h-12"
          >
            Browse All Faculty
          </Button>
        </div>
      </div>
    </section>
  )
}
