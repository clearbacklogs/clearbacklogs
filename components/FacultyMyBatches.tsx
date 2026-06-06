'use client'

import { Button } from '@/components/ui/button'
import { Edit, Trash2, Plus, Users, Clock } from 'lucide-react'
import { useState } from 'react'

export function FacultyMyBatches() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    subject: '',
    university: '',
    branch: '',
    semester: '',
    fee: '',
    startDate: '',
    timing: '',
    googleMeetLink: '',
    description: '',
  })

  const batches = [
    {
      subject: 'Data Structures & Algorithms',
      university: 'JNTUH',
      timing: 'Mon, Wed, Fri 7-8 PM',
      students: 24,
      fee: 3000,
      status: 'Active',
    },
    {
      subject: 'Database Management Systems',
      university: 'JNTUK',
      timing: 'Tue, Thu 6-7:30 PM',
      students: 18,
      fee: 2500,
      status: 'Active',
    },
    {
      subject: 'Web Development',
      university: 'OU',
      timing: 'Sat, Sun 5-7 PM',
      students: 31,
      fee: 3500,
      status: 'Active',
    },
    {
      subject: 'Operating Systems',
      university: 'KU',
      timing: 'Mon, Wed 8-9 PM',
      students: 15,
      fee: 2800,
      status: 'Coming Soon',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Batch created:', formData)
    alert('Batch created successfully!')
    setFormData({ subject: '', university: '', branch: '', semester: '', fee: '', startDate: '', timing: '', googleMeetLink: '', description: '' })
    setShowCreateForm(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">My Batches</h2>
        <Button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" /> Create Batch
        </Button>
      </div>

      {/* Create Batch Form */}
      {showCreateForm && (
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Create New Batch</h3>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
              <input name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Enter subject name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">University</label>
              <select name="university" value={formData.university} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none">
                <option value="">Select University</option>
                <option value="JNTUH">JNTUH</option>
                <option value="JNTUK">JNTUK</option>
                <option value="OU">OU</option>
                <option value="KU">KU</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Branch</label>
              <input name="branch" value={formData.branch} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="CSE, ECE, etc." />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Semester</label>
              <input name="semester" value={formData.semester} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="3, 4, 5, etc." />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Fee (₹)</label>
              <input name="fee" value={formData.fee} onChange={handleChange} required type="number" className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="3000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Start Date</label>
              <input name="startDate" value={formData.startDate} onChange={handleChange} required type="date" className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2">Batch Timing</label>
              <input name="timing" value={formData.timing} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="e.g., Mon, Wed, Fri 7-8 PM" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2">Google Meet Link</label>
              <input name="googleMeetLink" value={formData.googleMeetLink} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="https://meet.google.com/xxx-xxx-xxx" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none h-24 resize-none" placeholder="Batch description and learning objectives..." />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-semibold">
                Create Batch
              </Button>
              <Button
                type="button"
                onClick={() => setShowCreateForm(false)}
                variant="outline"
                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg h-10 font-semibold"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Batches Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {batches.map((batch, index) => (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{batch.subject}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{batch.university}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${batch.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {batch.status}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600 mb-4 pb-4 border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>{batch.timing}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                <span>{batch.students} students enrolled</span>
              </div>
              <p className="font-semibold text-slate-900">₹{batch.fee}/month</p>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-9 text-sm font-semibold flex items-center justify-center gap-2">
                <Edit className="h-4 w-4" /> Edit
              </Button>
              <Button variant="outline" className="flex-1 border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-lg h-9 text-sm font-semibold flex items-center justify-center gap-2">
                <Trash2 className="h-4 w-4" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
