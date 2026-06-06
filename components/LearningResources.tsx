'use client'

import { Button } from '@/components/ui/button'
import { FileText, BookOpen, FileQuestion, FolderOpen, Play, ExternalLink } from 'lucide-react'

export function LearningResources() {
  const resources = [
    {
      title: 'DSA Complete Notes',
      subject: 'Data Structures & Algorithms',
      faculty: 'Dr. Rajesh Kumar',
      type: 'Notes',
      icon: BookOpen,
      uploadDate: 'Jun 1, 2026',
      link: '#',
    },
    {
      title: 'DBMS Theory & Practical',
      subject: 'Database Management Systems',
      faculty: 'Dr. Vikram Singh',
      type: 'Drive Folder',
      icon: FolderOpen,
      uploadDate: 'May 28, 2026',
      link: '#',
    },
    {
      title: 'Previous Year Papers (2020-2025)',
      subject: 'Data Structures & Algorithms',
      faculty: 'Dr. Rajesh Kumar',
      type: 'Previous Papers',
      icon: FileQuestion,
      uploadDate: 'Jun 2, 2026',
      link: '#',
    },
    {
      title: 'Web Development Tutorial Series',
      subject: 'Web Development Bootcamp',
      faculty: 'Prof. Aisha Patel',
      type: 'YouTube Video',
      icon: Play,
      uploadDate: 'May 30, 2026',
      link: '#',
    },
    {
      title: 'Calculus Quick Reference',
      subject: 'Calculus & Linear Algebra',
      faculty: 'Prof. Aisha Patel',
      type: 'PDF',
      icon: FileText,
      uploadDate: 'Jun 3, 2026',
      link: '#',
    },
    {
      title: 'Practice Problems Set 1-5',
      subject: 'Data Structures & Algorithms',
      faculty: 'Dr. Rajesh Kumar',
      type: 'Notes',
      icon: BookOpen,
      uploadDate: 'Jun 4, 2026',
      link: '#',
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-700'
      case 'Notes':
        return 'bg-blue-100 text-blue-700'
      case 'Previous Papers':
        return 'bg-purple-100 text-purple-700'
      case 'Drive Folder':
        return 'bg-green-100 text-green-700'
      case 'YouTube Video':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-slate-100 text-slate-700'
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">Learning Resources</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 md:px-6 h-10 font-semibold text-sm md:text-base w-full sm:w-auto">
          View All Resources
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-4 md:p-6 space-y-4 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <span className={`text-xs font-bold px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="font-bold text-slate-900 line-clamp-2 text-sm md:text-base">{resource.title}</h3>
                <p className="text-xs md:text-sm text-slate-600">{resource.subject}</p>
                <p className="text-xs text-slate-500">By {resource.faculty}</p>
              </div>

              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-blue-100 text-xs text-slate-500">
                <span>Uploaded {resource.uploadDate}</span>
              </div>

              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-8 md:h-9 font-semibold flex items-center justify-center gap-2 text-xs md:text-sm"
              >
                <a href={resource.link}>
                  Open Resource
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
