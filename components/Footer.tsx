'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Clear Your Backlogs?</h2>
              <p className="text-white/80 text-lg">
                Join thousands of students who have successfully passed their exams with ClearBacklogs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/find-batches" className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors">
                Find Faculty
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/find-batches" className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20">
                Join a Batch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ClearBacklogs</h3>
            <p className="text-white/70 text-sm">
              Pass your backlogs. Complete your degree.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/find-batches" className="hover:text-white transition-colors">Find Faculty</Link></li>
              <li><Link href="/find-batches" className="hover:text-white transition-colors">Join Batches</Link></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#stories" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">For Faculty</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/#faculty-join" className="hover:text-white transition-colors">Become Faculty</a></li>
              <li><Link href="/faculty/dashboard" className="hover:text-white transition-colors">Faculty Dashboard</Link></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 ClearBacklogs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
