'use client'

import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We&apos;ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a question? Our team is here to help. Reach out and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center space-y-4 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto">
              <Mail className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Email</h3>
            <p className="text-slate-600 font-semibold">support@clearbacklogs.com</p>
            <p className="text-sm text-slate-500">We respond within 24 hours</p>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center space-y-4 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto">
              <Phone className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Phone</h3>
            <p className="text-slate-600 font-semibold">+91 8800 XXXX XX</p>
            <p className="text-sm text-slate-500">Mon-Fri, 10 AM - 6 PM IST</p>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center space-y-4 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mx-auto">
              <MapPin className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Office</h3>
            <p className="text-slate-600 font-semibold">Bangalore, India</p>
            <p className="text-sm text-slate-500">Available for on-site meetings</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="find-faculty">Finding Faculty</option>
                    <option value="join-batch">Joining a Batch</option>
                    <option value="become-faculty">Becoming Faculty</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-11 font-semibold shadow-md hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-12 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Why ClearBacklogs?</h3>
              <p className="text-slate-600 leading-relaxed">
                ClearBacklogs is India&apos;s most trusted platform for clearing backlog subjects. We have helped over 50,000 students achieve their academic goals with a 98% pass rate.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="text-green-600 text-2xl font-bold">✓</div>
                <div>
                  <p className="font-bold text-slate-900">500+ Expert Faculty</p>
                  <p className="text-sm text-slate-600">Highly experienced educators</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-green-600 text-2xl font-bold">✓</div>
                <div>
                  <p className="font-bold text-slate-900">Live Classes & Batches</p>
                  <p className="text-sm text-slate-600">Interactive learning sessions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-green-600 text-2xl font-bold">✓</div>
                <div>
                  <p className="font-bold text-slate-900">Personalized Support</p>
                  <p className="text-sm text-slate-600">24/7 doubt clarification</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-green-600 text-2xl font-bold">✓</div>
                <div>
                  <p className="font-bold text-slate-900">Affordable Pricing</p>
                  <p className="text-sm text-slate-600">Flexible payment options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
