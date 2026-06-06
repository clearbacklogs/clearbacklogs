import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { AdminReports } from '@/components/AdminReports'

export default function AdminReportsPage() {
  return (
    <div className="flex bg-blue-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-0">
        <AdminTopNav />
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
            <p className="text-slate-600 mt-2">Track platform performance and growth metrics.</p>
          </div>
          <AdminReports />
        </div>
      </div>
    </div>
  )
}
