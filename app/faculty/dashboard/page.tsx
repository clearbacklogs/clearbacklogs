'use client'

import { FacultySidebar } from '@/components/FacultySidebar'
import { FacultyTopNav } from '@/components/FacultyTopNav'
import { FacultyDashboardCards } from '@/components/FacultyDashboardCards'
import { FacultyMyBatches } from '@/components/FacultyMyBatches'
import { FacultyStudents } from '@/components/FacultyStudents'
import { FacultyNotifications } from '@/components/FacultyNotifications'

export default function FacultyDashboard() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <FacultySidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <FacultyTopNav />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            {/* Welcome Message */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">Welcome, Dr. Rajesh Kumar</h1>
              <p className="text-sm md:text-base text-slate-600 mt-2">Manage your batches, students, and track your earnings</p>
            </div>

            {/* Dashboard Cards */}
            <section>
              <FacultyDashboardCards />
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column - My Batches */}
              <div className="lg:col-span-2">
                <FacultyMyBatches />
              </div>

              {/* Right Column - Notifications */}
              <div>
                <FacultyNotifications />
              </div>
            </div>

            {/* Students Table */}
            <section>
              <FacultyStudents />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
