import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { AdminDashboardStats } from '@/components/AdminDashboardStats'
import { AdminFacultyManagement } from '@/components/AdminFacultyManagement'
import { AdminStudentManagement } from '@/components/AdminStudentManagement'
import { AdminBatchManagement } from '@/components/AdminBatchManagement'
import { AdminPaymentVerification } from '@/components/AdminPaymentVerification'
import { AdminRecentActivities } from '@/components/AdminRecentActivities'

export default function AdminDashboard() {
  return (
    <div className="flex bg-blue-50 min-h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-sm md:text-base text-slate-600 mt-2">Welcome back! Here&apos;s your platform overview.</p>
          </div>

          <AdminDashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <AdminFacultyManagement />
            </div>
            <div>
              <AdminRecentActivities />
            </div>
          </div>

          <AdminStudentManagement />

          <AdminBatchManagement />

          <AdminPaymentVerification />
        </div>
      </div>
    </div>
  )
}
