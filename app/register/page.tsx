'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  const [userType, setUserType] = useState<'student' | 'faculty'>('student')
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    university: '',
    course: '',
    branch: '',
    semester: '',
    qualification: '',
    experience: '',
    subjectsExpertise: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  })

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone.replace(/\D/g, ''))
  const validatePassword = (password: string) => password.length >= 8

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))
  }

  const validateStep = (stepNumber: number) => {
    const newErrors: Record<string, string> = {}

    if (userType === 'student') {
      if (stepNumber === 1) {
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format'
        if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required'
        else if (!validatePhone(formData.mobileNumber)) newErrors.mobileNumber = 'Invalid phone number'
      } else if (stepNumber === 2) {
        if (!formData.university.trim()) newErrors.university = 'University is required'
        if (!formData.course.trim()) newErrors.course = 'Course is required'
        if (!formData.branch.trim()) newErrors.branch = 'Branch is required'
        if (!formData.semester.trim()) newErrors.semester = 'Semester is required'
      } else if (stepNumber === 3) {
        if (!formData.password.trim()) newErrors.password = 'Password is required'
        else if (!validatePassword(formData.password)) newErrors.password = 'Password must be at least 8 characters'
        if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Confirm password is required'
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
        if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms and conditions'
      }
    } else {
      if (stepNumber === 1) {
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format'
        if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required'
        else if (!validatePhone(formData.mobileNumber)) newErrors.mobileNumber = 'Invalid phone number'
      } else if (stepNumber === 2) {
        if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required'
        if (!formData.experience.trim()) newErrors.experience = 'Experience is required'
        if (!formData.subjectsExpertise.trim()) newErrors.subjectsExpertise = 'At least one subject is required'
      } else if (stepNumber === 3) {
        if (!formData.password.trim()) newErrors.password = 'Password is required'
        else if (!validatePassword(formData.password)) newErrors.password = 'Password must be at least 8 characters'
        if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Confirm password is required'
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
        if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms and conditions'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(3)) {
      console.log('Form submitted:', { userType, ...formData })
      alert('Registration successful! Please check your email to verify your account.')
    }
  }

  const totalSteps = 3
  const maxStep = userType === 'student' ? 3 : 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="bg-white rounded-2xl border-2 border-blue-100 p-8 md:p-10 shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-600">Join thousands of students and faculty on ClearBacklogs</p>
            </div>

            {/* User Type Selection */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => {
                  setUserType('student')
                  setStep(1)
                  setFormData({
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    university: '',
                    course: '',
                    branch: '',
                    semester: '',
                    qualification: '',
                    experience: '',
                    subjectsExpertise: '',
                    password: '',
                    confirmPassword: '',
                    termsAccepted: false,
                  })
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                  userType === 'student'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => {
                  setUserType('faculty')
                  setStep(1)
                  setFormData({
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    university: '',
                    course: '',
                    branch: '',
                    semester: '',
                    qualification: '',
                    experience: '',
                    subjectsExpertise: '',
                    password: '',
                    confirmPassword: '',
                    termsAccepted: false,
                  })
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                  userType === 'faculty'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Faculty
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      s < step
                        ? 'bg-green-600 text-white'
                        : s === step
                          ? 'bg-blue-600 text-white ring-2 ring-blue-200'
                          : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {s < step ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && <div className={`w-12 h-1 rounded-full mx-2 ${s < step ? 'bg-green-600' : 'bg-blue-100'}`} />}
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-blue-200'
                      }`}
                    />
                    {errors.fullName && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.email ? 'border-red-500' : 'border-blue-200'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.mobileNumber ? 'border-red-500' : 'border-blue-200'
                      }`}
                    />
                    {errors.mobileNumber && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.mobileNumber}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 - Student */}
              {step === 2 && userType === 'student' && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">University</label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.university ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select your university</option>
                      <option value="JNTUH">JNTUH</option>
                      <option value="JNTUK">JNTUK</option>
                      <option value="OU">Osmania University</option>
                      <option value="KU">Kakatiya University</option>
                      <option value="ANU">Acharya Nagarjuna University</option>
                      <option value="VTU">Visvesvaraya Technological University</option>
                      <option value="PUNE">University of Pune</option>
                    </select>
                    {errors.university && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.university}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Course</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.course ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select your course</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="MCA">MCA</option>
                      <option value="B.A">B.A</option>
                      <option value="B.Sc">B.Sc</option>
                    </select>
                    {errors.course && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.course}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Branch</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.branch ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select your branch</option>
                      <option value="CSE">Computer Science Engineering</option>
                      <option value="ECE">Electronics & Communication</option>
                      <option value="EEE">Electrical & Electronics</option>
                      <option value="ME">Mechanical Engineering</option>
                      <option value="CIVIL">Civil Engineering</option>
                      <option value="IT">Information Technology</option>
                    </select>
                    {errors.branch && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.branch}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Current Semester</label>
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.semester ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select your semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <option key={sem} value={sem}>
                          Semester {sem}
                        </option>
                      ))}
                    </select>
                    {errors.semester && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.semester}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 - Faculty */}
              {step === 2 && userType === 'faculty' && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Qualification</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.qualification ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select your qualification</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="MCA">MCA</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="PhD">PhD</option>
                    </select>
                    {errors.qualification && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.qualification}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Teaching Experience (Years)</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                        errors.experience ? 'border-red-500' : 'border-blue-200'
                      }`}
                    >
                      <option value="">Select years of experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.experience && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.experience}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Subjects Expertise</label>
                    <textarea
                      name="subjectsExpertise"
                      value={formData.subjectsExpertise}
                      onChange={handleInputChange}
                      placeholder="e.g., Data Structures, Algorithms, Database Management Systems"
                      rows={3}
                      className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all ${
                        errors.subjectsExpertise ? 'border-red-500' : 'border-blue-200'
                      }`}
                    />
                    {errors.subjectsExpertise && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subjectsExpertise}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3 - Password */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Minimum 8 characters"
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all pr-12 ${
                          errors.password ? 'border-red-500' : 'border-blue-200'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Re-enter your password"
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all pr-12 ${
                          errors.confirmPassword ? 'border-red-500' : 'border-blue-200'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.termsAccepted}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-blue-200 text-blue-600 focus:ring-2 focus:ring-blue-200 cursor-pointer mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-slate-700">
                        I agree to the{' '}
                        <a href="#" className="font-semibold text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="font-semibold text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                  {errors.terms && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.terms}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>

            {/* Login Link */}
            <p className="text-center mt-6 text-slate-600">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>

          {/* Right Side - Hero */}
          <div className="hidden md:flex flex-col justify-center items-center space-y-8">
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute inset-0 backdrop-blur-sm bg-white/40" />
                <div className="relative text-center space-y-4">
                  <div className="text-8xl animate-bounce">📚</div>
                  <p className="text-slate-700 font-semibold text-lg">Start Your Learning Journey</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Clear Your Backlogs.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Complete Your Degree
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-sm mx-auto">
                Join thousands of students who have successfully cleared their backlog subjects and achieved their academic goals with expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="bg-white border-2 border-blue-100 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-2xl font-bold text-blue-600">50K+</p>
                <p className="text-xs text-slate-600 mt-1">Students</p>
              </div>
              <div className="bg-white border-2 border-blue-100 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-2xl font-bold text-green-600">98%</p>
                <p className="text-xs text-slate-600 mt-1">Pass Rate</p>
              </div>
              <div className="bg-white border-2 border-blue-100 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-2xl font-bold text-blue-600">500+</p>
                <p className="text-xs text-slate-600 mt-1">Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
