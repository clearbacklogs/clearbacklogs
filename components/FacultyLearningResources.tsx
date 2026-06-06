'use client'

import { Button } from '@/components/ui/button'
import { Plus, ExternalLink, Trash2, FileText, BookOpen, FolderOpen, Play } from 'lucide-react'
import { useState } from 'react'

export function FacultyLearningResources() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    type: 'PDF',
    subject: '',
    link: '',
  })

  const resources = [
    { title: 'DSA Complete Notes', type: 'PDF', subject: 'Data Structures', link: 'https://drive.google.com/file/...' },
    { title: 'Database Design Folder', type: 'Drive Folder', subject: 'DBMS', link: 'https://drive.google.com/drive/folders/...' },
    { title: 'Web Dev Playlist', type: 'YouTube Video', subject: 'Web Development', link: 'https://youtube.com/playlist/...' },
    { title: 'Previous Year Papers', type: 'PDF', subject: 'Data Structures', link: 'https://drive.google.com/file/...' },
    { title: 'Interview Prep Guide', type: 'Notes', subject: 'DSA', link: 'https://drive.google.com/file/...' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Resource added:', formData)
    alert('Resource added successfully!')
    setFormData({ title: '', type: 'PDF', subject: '', link: '' })
    setShowAddForm(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-5 w-5 text-red-600" />
      case 'Notes':
        return <BookOpen className="h-5 w-5 text-blue-600" />
      case 'Drive Folder':
        return <FolderOpen className="h-5 w-5 text-yellow-600" />
      case 'YouTube Video':
        return <Play className="h-5 w-5 text-red-500" />
      default:
        return <FileText className="h-5 w-5 text-slate-600" />
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Learning Resources</h2>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10 font-semibold flex items-center gap-2"
        >
          <Plus className="h-4 w-4" /> Add Resource
        </Button>
      </div>

      {/* Add Resource Form */}
      {showAddForm && (
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Add Learning Resource</h3>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2">Resource Title</label>
              <input name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="e.g., Complete DSA Notes" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Resource Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none">
                <option value="PDF">PDF</option>
                <option value="Notes">Notes</option>
                <option value="Drive Folder">Drive Folder</option>
                <option value="YouTube Video">YouTube Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none">
                <option value="">Select Subject</option>
                <option value="Data Structures">Data Structures</option>
                <option value="DBMS">DBMS</option>
                <option value="Web Development">Web Development</option>
                <option value="Operating Systems">Operating Systems</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2">External Link</label>
              <input name="link" value={formData.link} onChange={handleChange} required className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="https://drive.google.com/... or https://youtube.com/..." />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-semibold">
                Add Resource
              </Button>
              <Button
                type="button"
                onClick={() => setShowAddForm(false)}
                variant="outline"
                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg h-10 font-semibold"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                {getResourceIcon(resource.type)}
                <div>
                  <h3 className="font-bold text-slate-900">{resource.title}</h3>
                  <p className="text-sm text-slate-600">{resource.subject}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{resource.type}</span>
            </div>

            <div className="flex gap-2 pt-2 border-t border-blue-100">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-9 text-sm font-semibold flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Open
                </Button>
              </a>
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
