import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { AdminFacultyManagement } from '@/components/AdminFacultyManagement'

export default function AdminFacultyPage() {
  return (
    <div className="flex bg-blue-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-0">
        <AdminTopNav />
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Faculty Management</h1>
            <p className="text-slate-600 mt-2">Approve, verify, and manage faculty members.</p>
          </div>
          <AdminFacultyManagement />
        </div>
      </div>
    </div>
  )
}
