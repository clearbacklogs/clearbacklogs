'use client'

import { CheckCircle2, Clock, Zap } from 'lucide-react'

export function ProgressTracking() {
  const subjects = [
    { name: 'Data Structures', status: 'completed', progress: 100 },
    { name: 'Database Management', status: 'in-progress', progress: 65 },
    { name: 'Web Development', status: 'in-progress', progress: 45 },
    { name: 'Calculus & Algebra', status: 'not-started', progress: 0 },
  ]

  const completedCount = subjects.filter((s) => s.status === 'completed').length
  const inProgressCount = subjects.filter((s) => s.status === 'in-progress').length
  const totalExamReadiness = Math.round(
    subjects.reduce((acc, curr) => acc + curr.progress, 0) / subjects.length
  )

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Subjects Completed</h3>
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <p className="text-4xl font-bold text-green-600">{completedCount}</p>
        <p className="text-sm text-slate-600">Out of {subjects.length} subjects</p>
      </div>

      <div className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">In Progress</h3>
          <Clock className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-4xl font-bold text-blue-600">{inProgressCount}</p>
        <p className="text-sm text-slate-600">Currently studying</p>
      </div>

      <div className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Exam Readiness</h3>
          <Zap className="w-6 h-6 text-orange-600" />
        </div>
        <p className="text-4xl font-bold text-orange-600">{totalExamReadiness}%</p>
        <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
            style={{ width: `${totalExamReadiness}%` }}
          />
        </div>
      </div>

      <div className="md:col-span-3 bg-white border-2 border-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-slate-900 mb-6">Subject Progress</h3>
        <div className="space-y-4">
          {subjects.map((subject, index) => {
            let statusColor = 'bg-slate-100 text-slate-700'
            let statusText = 'Not Started'
            let statusIcon = '○'

            if (subject.status === 'completed') {
              statusColor = 'bg-green-100 text-green-700'
              statusText = 'Completed'
              statusIcon = '✓'
            } else if (subject.status === 'in-progress') {
              statusColor = 'bg-blue-100 text-blue-700'
              statusText = 'In Progress'
              statusIcon = '→'
            }

            return (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{subject.name}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden max-w-xs">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{subject.progress}%</span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>
                  {statusText}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
