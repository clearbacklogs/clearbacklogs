'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Mail } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate email sending
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-6 py-12">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-sm">CB</span>
          </div>
          <span className="font-bold text-lg text-slate-900">ClearBacklogs</span>
        </Link>

        {/* Card */}
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-xl">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Reset Password</h1>
                <p className="text-slate-600">
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-11 font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Send Reset Link
                    </span>
                  )}
                </Button>
              </form>

              {/* Back to Login */}
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <span className="text-3xl">✓</span>
              </div>

              {/* Success Message */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Check Your Email</h2>
                <p className="text-slate-600">
                  We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions to reset your password.
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-sm text-slate-700">
                <p>Didn&apos;t receive the email? Check your spam folder or contact our support team.</p>
              </div>

              {/* Back to Login */}
              <Link
                href="/login"
                className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all text-center"
              >
                Back to Login
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Need help?{' '}
          <Link href="/support" className="text-blue-600 hover:underline font-medium">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  )
}
