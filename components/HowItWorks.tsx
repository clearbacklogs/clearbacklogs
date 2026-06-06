'use client'

import { BookOpen, Users, Video, CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: BookOpen,
      title: 'Find Your Subject',
      description: 'Search from 100+ backlog subjects across all degree programs and find expert faculty.',
    },
    {
      icon: Users,
      title: 'Connect with Faculty',
      description: 'Match with experienced professors who specialize in your subject and have proven track records.',
    },
    {
      icon: Video,
      title: 'Join Live Sessions',
      description: 'Attend interactive live classes, doubt sessions, and practice with mock exams.',
    },
    {
      icon: CheckCircle2,
      title: 'Pass Your Exam',
      description: 'Get personalized guidance and ace your backlog exam with confidence.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple 4-step process to clear your backlog and complete your degree.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-blue-100 rounded-xl p-8 space-y-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center group-hover:shadow-md transition-all">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 text-white flex items-center justify-center rounded-full text-lg font-bold">
                        →
                      </div>
                    </div>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <div className="text-3xl text-blue-300">↓</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
