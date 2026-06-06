'use client'

import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Clear Your Backlogs.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Complete Your Degree
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Live faculty-led classes, one-to-one mentoring, exam-focused preparation and study materials for engineering and postgraduate students.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/find-batches">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Find Faculty
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/find-batches">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 h-12 rounded-lg font-semibold"
                >
                  Join a Batch
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <span className="text-sm text-slate-600">50K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <span className="text-sm text-slate-600">500+ Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <span className="text-sm text-slate-600">98% Pass Rate</span>
              </div>
            </div>
          </div>

          {/* Right - Illustration Placeholder */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-2xl overflow-hidden">
              {/* Glassmorphism card effect */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/40 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                  <p className="text-slate-700 font-semibold">Watch How It Works</p>
                  <p className="text-sm text-slate-600">See student success stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
