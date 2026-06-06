'use client'

import { Button } from '@/components/ui/button'
import { Briefcase, TrendingUp, Users } from 'lucide-react'

export function BecomeFaculty() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Income',
      description: 'Earn ₹10,000-50,000 per month based on your teaching and number of students.',
    },
    {
      icon: Users,
      title: 'Impact Lives',
      description: 'Help thousands of students achieve their academic goals and transform their futures.',
    },
    {
      icon: Briefcase,
      title: 'Flexible Schedule',
      description: 'Set your own teaching hours and work from anywhere. Complete control over your time.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-gradient-to-r from-blue-100 via-green-100 to-blue-100 rounded-3xl p-12 md:p-16 space-y-8 border-2 border-blue-200">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Become a Faculty Member</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our growing community of educators. Share your expertise, earn a competitive income, and impact thousands of students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base h-12 px-8 font-semibold shadow-lg hover:shadow-xl transition-all">
              Apply Now
            </Button>
            <Button
              size="lg"
              className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-lg text-base h-12 px-8 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Why Faculty Love ClearBacklogs</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Easy Onboarding</h4>
                  <p className="text-slate-600">Get started in minutes with our simple verification process.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Professional Tools</h4>
                  <p className="text-slate-600">Access high-quality video conferencing, analytics, and student management tools.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Regular Payouts</h4>
                  <p className="text-slate-600">Receive competitive payments directly to your account every month.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">24/7 Support</h4>
                  <p className="text-slate-600">Our dedicated team is always available to help you succeed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 space-y-6 hover:border-blue-300 transition-all">
            <h3 className="text-2xl font-bold text-slate-900">Faculty Requirements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-2xl -mt-1 font-bold">•</div>
                <p className="text-slate-600 font-medium">Master&apos;s degree or B.Tech with 2+ years of teaching experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-2xl -mt-1 font-bold">•</div>
                <p className="text-slate-600 font-medium">Expertise in at least one backlog subject (DSA, DBMS, Web Dev, etc.)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-2xl -mt-1 font-bold">•</div>
                <p className="text-slate-600 font-medium">Excellent communication and mentoring skills</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-2xl -mt-1 font-bold">•</div>
                <p className="text-slate-600 font-medium">Reliable internet connection and quiet teaching space</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-2xl -mt-1 font-bold">•</div>
                <p className="text-slate-600 font-medium">Commitment to regular teaching sessions</p>
              </div>
            </div>

            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 mt-6 font-semibold shadow-md hover:shadow-lg transition-all">
              Become Faculty
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
