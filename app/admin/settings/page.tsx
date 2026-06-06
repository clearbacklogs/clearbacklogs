import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopNav } from '@/components/AdminTopNav'
import { Button } from '@/components/ui/button'

export default function AdminSettingsPage() {
  return (
    <div className="flex bg-blue-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 md:ml-0">
        <AdminTopNav />
        <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-2">Manage platform settings and configurations.</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Platform Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-blue-100 rounded-lg">
                  <div>
                    <p className="font-bold text-slate-900">Commission Rate</p>
                    <p className="text-sm text-slate-600">Platform commission deducted from faculty earnings</p>
                  </div>
                  <input type="text" value="20%" disabled className="w-20 px-3 py-2 border border-blue-100 rounded-lg bg-blue-50 font-bold text-slate-900" />
                </div>
                <div className="flex items-center justify-between p-4 border border-blue-100 rounded-lg">
                  <div>
                    <p className="font-bold text-slate-900">Minimum Batch Fee</p>
                    <p className="text-sm text-slate-600">Minimum fee allowed for batches</p>
                  </div>
                  <input type="text" value="₹1,500" disabled className="w-32 px-3 py-2 border border-blue-100 rounded-lg bg-blue-50 font-bold text-slate-900" />
                </div>
                <div className="flex items-center justify-between p-4 border border-blue-100 rounded-lg">
                  <div>
                    <p className="font-bold text-slate-900">Maximum Students per Batch</p>
                    <p className="text-sm text-slate-600">Limit on batch enrollment size</p>
                  </div>
                  <input type="text" value="50" disabled className="w-20 px-3 py-2 border border-blue-100 rounded-lg bg-blue-50 font-bold text-slate-900" />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-blue-100 rounded-lg cursor-pointer hover:bg-blue-50">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">New Registration Alerts</p>
                    <p className="text-xs text-slate-500">Notify on new student/faculty registrations</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-blue-100 rounded-lg cursor-pointer hover:bg-blue-50">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Payment Alerts</p>
                    <p className="text-xs text-slate-500">Notify when payments are submitted</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-blue-100 rounded-lg cursor-pointer hover:bg-blue-50">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Daily Report</p>
                    <p className="text-xs text-slate-500">Daily platform activity summary</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 h-11 font-semibold">
                Save Settings
              </Button>
              <Button className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-lg px-8 h-11 font-semibold">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
