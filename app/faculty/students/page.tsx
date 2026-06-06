'use client'

import { FacultySidebar } from '@/components/FacultySidebar'
import { FacultyTopNav } from '@/components/FacultyTopNav'
import { FacultyStudents } from '@/components/FacultyStudents'

export default function StudentsPage() {
  return (
    <div className="flex h-screen bg-slate-50">
      <FacultySidebar />
      <main className="flex-1 lg:ml-64 flex flex-col">
        <FacultyTopNav />
        <div className="flex-1 overflow-auto mt-16">
          <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Students</h1>
              <p className="text-slate-600 mt-2">Manage your enrolled students and their progress</p>
            </div>
            <FacultyStudents />
          </div>
        </div>
      </main>
    </div>
  )
}
