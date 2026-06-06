'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Eye, EyeOff, Home } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<'student' | 'faculty' | 'admin'>('student')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on selected role
      if (selectedRole === 'student') {
        router.push('/dashboard')
      } else if (selectedRole === 'faculty') {
        router.push('/faculty/dashboard')
      } else if (selectedRole === 'admin') {
        router.push('/admin/dashboard')
      }
    }, 1500)
  }

  const roles = [
    { id: 'student', label: 'Student', icon: '👨‍🎓' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
    { id: 'admin', label: 'Admin', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12">
        <div className="max-w-md w-full mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white text-sm">CB</span>
                </div>
                <span className="font-bold text-lg text-slate-900">ClearBacklogs</span>
              </Link>
            </div>
            <Link href="/" className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Back to Home">
              <Home className="h-5 w-5 text-blue-600" />
            </Link>
          </div>

          {/* Welcome Text */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-600">Sign in to your ClearBacklogs account</p>
          </div>

          {/* Role Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-900">Select Your Role</label>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id as 'student' | 'faculty' | 'admin')}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedRole === role.id
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-blue-100 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{role.icon}</div>
                  <div className="text-xs font-bold text-slate-900">{role.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
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

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-bold text-slate-900">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-blue-200 bg-white cursor-pointer accent-blue-600"
                />
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg h-11 font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing In...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign In
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-blue-100" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-slate-600">Don&apos;t have an account?</span>
            </div>
          </div>

          {/* Create Account Link */}
          <Link
            href="/signup"
            className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all text-center"
          >
            Create Account
          </Link>

          {/* Footer */}
          <p className="text-center text-xs text-slate-500">
            By signing in, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden flex-col justify-center items-center px-8 py-12">
        {/* Decorative Gradient Blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 max-w-lg">
          {/* Illustration Placeholder */}
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-6xl">📚</div>
          </div>

          {/* Hero Text */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Clear Your Backlogs.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Complete Your Degree
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Join thousands of students who have successfully cleared their backlog subjects and completed their degrees with expert guidance and personalized support.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-slate-600">Students</div>
            </div>
            <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-slate-600">Pass Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-slate-600">Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
