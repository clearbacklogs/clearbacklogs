import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { AdminStudentManagement } from '@/components/AdminStudentManagement'

export default function AdminStudentsPage() {
  return (
    <div className="flex bg-blue-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-0">
        <AdminTopNav />
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Students</h1>
            <p className="text-slate-600 mt-2">Manage and monitor all registered students.</p>
          </div>
          <AdminStudentManagement />
        </div>
      </div>
    </div>
  )
}
