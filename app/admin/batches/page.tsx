import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { AdminBatchManagement } from '@/components/AdminBatchManagement'

export default function AdminBatchesPage() {
  return (
    <div className="flex bg-blue-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-0">
        <AdminTopNav />
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Batch Management</h1>
            <p className="text-slate-600 mt-2">Monitor and manage all active batches.</p>
          </div>
          <AdminBatchManagement />
        </div>
      </div>
    </div>
  )
}
