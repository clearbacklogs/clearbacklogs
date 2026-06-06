'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Clock, Users, Star, Filter, X, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FindBatchesPage() {
  const [selectedUniversity, setSelectedUniversity] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedBatchType, setSelectedBatchType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [requestData, setRequestData] = useState({ subject: '', university: '' })
  const [filterOpen, setFilterOpen] = useState(false)

  const universities = ['JNTUH', 'JNTUK', 'OU', 'KU', 'ANU', 'VTU', 'Pune', 'Anna']
  const courses = ['B.Tech', 'MBA', 'M.Tech', 'MCA', 'B.Sc', 'B.A']
  const branches = ['CSE', 'ECE', 'EEE', 'ME', 'Civil', 'IT']
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8']
  const subjects = ['Data Structures', 'Calculus', 'DBMS', 'Web Dev', 'Java', 'Python', 'Algorithms', 'Finance']
  const batchTypes = ['Group Batch', 'One-to-One Mentoring']

  const batches = [
    {
      id: 1,
      subject: 'Data Structures & Algorithms',
      faculty: 'Dr. Rajesh Kumar',
      university: 'JNTUH',
      batchType: 'Group Batch',
      timing: 'Mon, Wed, Fri 7-8 PM',
      duration: '3 months',
      fee: 2500,
      students: 24,
      maxStudents: 30,
      rating: 4.9,
      description: 'Master data structures with hands-on practice and mock exams.',
    },
    {
      id: 2,
      subject: 'Calculus & Linear Algebra',
      faculty: 'Prof. Aisha Patel',
      university: 'JNTUK',
      batchType: 'One-to-One Mentoring',
      timing: 'Flexible',
      duration: '2 months',
      fee: 4500,
      students: 1,
      maxStudents: 1,
      rating: 4.8,
      description: 'Personalized calculus and linear algebra coaching.',
    },
    {
      id: 3,
      subject: 'Database Management Systems',
      faculty: 'Dr. Vikram Singh',
      university: 'OU',
      batchType: 'Group Batch',
      timing: 'Tue, Thu 6-7:30 PM',
      duration: '2.5 months',
      fee: 2800,
      students: 28,
      maxStudents: 30,
      rating: 4.9,
      description: 'SQL, normalization, and advanced database concepts.',
    },
    {
      id: 4,
      subject: 'Web Development Bootcamp',
      faculty: 'Ms. Priya Sharma',
      university: 'KU',
      batchType: 'Group Batch',
      timing: 'Sat, Sun 5-7 PM',
      fee: 3000,
      duration: '4 months',
      students: 15,
      maxStudents: 30,
      rating: 4.7,
      description: 'HTML, CSS, JavaScript, and React from basics to advanced.',
    },
    {
      id: 5,
      subject: 'Java Programming',
      faculty: 'Dr. Arjun Desai',
      university: 'ANU',
      batchType: 'One-to-One Mentoring',
      timing: 'Flexible',
      duration: '1.5 months',
      fee: 5000,
      students: 1,
      maxStudents: 1,
      rating: 4.8,
      description: 'OOP concepts, Spring framework, and project development.',
    },
    {
      id: 6,
      subject: 'Business Finance & Accounting',
      faculty: 'Prof. Neha Gupta',
      university: 'VTU',
      batchType: 'Group Batch',
      timing: 'Wed, Fri 6-8 PM',
      duration: '3 months',
      fee: 2200,
      students: 32,
      maxStudents: 35,
      rating: 4.6,
      description: 'Financial analysis, accounting principles, and case studies.',
    },
  ]

  const featuredSubjects = [
    { name: 'Data Structures', batches: 12 },
    { name: 'Calculus', batches: 8 },
    { name: 'DBMS', batches: 10 },
    { name: 'Web Development', batches: 15 },
  ]

  const filteredBatches = batches.filter((batch) => {
    return (
      (!selectedUniversity || batch.university === selectedUniversity) &&
      (!selectedBatchType || batch.batchType === selectedBatchType) &&
      (!selectedSubject || batch.subject.toLowerCase().includes(selectedSubject.toLowerCase())) &&
      (!searchQuery || batch.subject.toLowerCase().includes(searchQuery.toLowerCase()) || batch.faculty.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Batch request submitted for ${requestData.subject} at ${requestData.university}`)
    setRequestData({ subject: '', university: '' })
    setShowRequestForm(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Find Your Backlog Batch</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse hundreds of backlog batches from expert faculty. Start your journey to pass your exams.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search your backlog subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="flex items-center justify-between lg:hidden">
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                <button onClick={() => setFilterOpen(!filterOpen)} className="p-2">
                  {filterOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
                </button>
              </div>

              {(filterOpen || typeof window === 'undefined' || window.innerWidth >= 1024) && (
                <div className="space-y-6">
                  {/* University Filter */}
                  <div className="bg-white border-2 border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 mb-3">University</h3>
                    <div className="space-y-2">
                      {universities.map((uni) => (
                        <label key={uni} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedUniversity === uni}
                            onChange={(e) => setSelectedUniversity(e.target.checked ? uni : '')}
                            className="rounded border-blue-300"
                          />
                          <span className="text-sm text-slate-700">{uni}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Batch Type Filter */}
                  <div className="bg-white border-2 border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 mb-3">Batch Type</h3>
                    <div className="space-y-2">
                      {batchTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedBatchType === type}
                            onChange={(e) => setSelectedBatchType(e.target.checked ? type : '')}
                            className="rounded border-blue-300"
                          />
                          <span className="text-sm text-slate-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Subject Filter */}
                  <div className="bg-white border-2 border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 mb-3">Subject</h3>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500"
                    >
                      <option value="">All Subjects</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setSelectedUniversity('')
                      setSelectedBatchType('')
                      setSelectedSubject('')
                      setSearchQuery('')
                    }}
                    className="w-full py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Results Count */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                {filteredBatches.length} Batches Found
              </h2>
            </div>

            {/* Batch Cards */}
            {filteredBatches.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredBatches.map((batch) => (
                  <div
                    key={batch.id}
                    className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all group"
                  >
                    {/* Header */}
                    <div className="space-y-3 mb-4">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {batch.subject}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-xs font-bold">
                          {batch.faculty.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{batch.faculty}</p>
                          <p className="text-xs text-slate-500">{batch.university}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4 pb-4 border-b border-blue-100">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                          {batch.batchType}
                        </span>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                          {batch.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>{batch.timing}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-slate-600">
                            {batch.students}/{batch.maxStudents} Students
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-slate-900">{batch.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600">{batch.description}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Fee</p>
                        <p className="text-xl font-bold text-slate-900">₹{batch.fee}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                          View Details
                        </Button>
                        <Link href="/dashboard">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Enroll Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No Batches Found</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  We couldn't find any batches matching your filters. Try adjusting your search criteria or request a new batch.
                </p>
                <Button
                  onClick={() => setShowRequestForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10 font-semibold"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Request a Batch
                </Button>
              </div>
            )}

            {/* Featured Section */}
            {filteredBatches.length > 0 && (
              <div className="pt-8 border-t border-blue-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Backlog Subjects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredSubjects.map((subject) => (
                    <button
                      key={subject.name}
                      onClick={() => setSelectedSubject(subject.name)}
                      className="bg-white border-2 border-blue-100 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <p className="font-bold text-slate-900 group-hover:text-blue-600">{subject.name}</p>
                      <p className="text-sm text-slate-500">{subject.batches} batches</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Request Batch Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Request New Batch</h3>
              <button onClick={() => setShowRequestForm(false)} className="p-1 hover:bg-slate-100 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Subject Name</label>
                <input
                  type="text"
                  value={requestData.subject}
                  onChange={(e) => setRequestData({ ...requestData, subject: e.target.value })}
                  required
                  placeholder="e.g., Machine Learning"
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">University</label>
                <select
                  value={requestData.university}
                  onChange={(e) => setRequestData({ ...requestData, university: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select University</option>
                  {universities.map((uni) => (
                    <option key={uni} value={uni}>
                      {uni}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
