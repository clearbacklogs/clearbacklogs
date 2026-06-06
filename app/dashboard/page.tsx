import { DashboardSidebar } from '@/components/DashboardSidebar'
import { DashboardTopNav } from '@/components/DashboardTopNav'
import { DashboardSummary } from '@/components/DashboardSummary'
import { ActiveBatches } from '@/components/ActiveBatches'
import { UpcomingClasses } from '@/components/UpcomingClasses'
import { LearningResources } from '@/components/LearningResources'
import { PaymentSection } from '@/components/PaymentSection'
import { ProgressTracking } from '@/components/ProgressTracking'
import { NotificationsWidget } from '@/components/NotificationsWidget'

export const metadata = {
  title: 'Student Dashboard - ClearBacklogs',
  description: 'Manage your batches, attend live classes, access learning resources, and track your progress.',
}

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardTopNav />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            {/* Summary Cards */}
            <DashboardSummary />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column - Large Content */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* Active Batches */}
                <ActiveBatches />

                {/* Upcoming Classes */}
                <UpcomingClasses />

                {/* Learning Resources */}
                <LearningResources />

                {/* Payment Section */}
                <PaymentSection />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6 md:space-y-8">
                {/* Progress Tracking */}
                <ProgressTracking />

                {/* Notifications */}
                <NotificationsWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
