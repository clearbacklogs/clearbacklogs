'use client'

import { Star, Quote } from 'lucide-react'

export function StudentSuccessStories() {
  const stories = [
    {
      name: 'Priya Sharma',
      degree: 'B.Tech (CSE)',
      subject: 'Data Structures',
      quote:
        'I was struggling with DSA for months, but the clarity I got from ClearBacklogs faculty changed everything. Scored 87 in my exam!',
      rating: 5,
      result: 'Score: 87/100',
      avatar: 'from-purple-400 to-purple-600',
      initials: 'PS',
    },
    {
      name: 'Arjun Desai',
      degree: 'MBA',
      subject: 'Finance & Accounting',
      quote:
        'The live sessions and doubt clarifications were exactly what I needed. The faculty made complex topics simple. Finally passed with flying colors!',
      rating: 5,
      result: 'Score: 91/100',
      avatar: 'from-orange-400 to-orange-600',
      initials: 'AD',
    },
    {
      name: 'Anjali Nair',
      degree: 'M.Tech (ECE)',
      subject: 'Signal Processing',
      quote:
        'Comprehensive study materials and personalized guidance. The mock exams helped me gain the confidence I needed to ace the final exam.',
      rating: 5,
      result: 'Score: 89/100',
      avatar: 'from-pink-400 to-pink-600',
      initials: 'AN',
    },
    {
      name: 'Rohan Patel',
      degree: 'B.Tech (IT)',
      subject: 'Web Development',
      quote:
        'Excellent batch environment with supportive peers and knowledgeable instructors. Best decision I made for my backlog!',
      rating: 5,
      result: 'Score: 85/100',
      avatar: 'from-teal-400 to-teal-600',
      initials: 'RP',
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Student Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from students who cleared their backlogs and achieved their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-8 space-y-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${story.avatar} flex items-center justify-center text-white font-bold text-sm`}>
                    {story.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{story.name}</h3>
                    <p className="text-sm text-slate-600">{story.degree}</p>
                    <p className="text-sm text-blue-600 font-semibold">{story.subject}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
              </div>

              <p className="text-slate-700 leading-relaxed italic">
                &quot;{story.quote}&quot;
              </p>

              <div className="space-y-3 border-t border-blue-100 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-900">{story.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
