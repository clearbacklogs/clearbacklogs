'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle } from 'lucide-react'

export function AdminFacultyManagement() {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      qualification: 'M.Tech, PhD',
      subjects: 'DSA, DBMS, OOP',
      status: 'Pending',
      avatar: 'RK',
    },
    {
      name: 'Prof. Aisha Patel',
      qualification: 'MBA, B.Tech',
      subjects: 'Finance, Accounting, Economics',
      status: 'Approved',
      avatar: 'AP',
    },
    {
      name: 'Dr. Vikram Singh',
      qualification: 'M.Tech, PhD',
      subjects: 'Web Dev, JavaScript, React',
      status: 'Pending',
      avatar: 'VS',
    },
    {
      name: 'Prof. Sneha Reddy',
      qualification: 'MCA, B.Tech',
      subjects: 'Database, SQL, MongoDB',
      status: 'Approved',
      avatar: 'SR',
    },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">Faculty Management</h3>
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full px-4 md:px-0">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-blue-100">
                <th className="text-left py-3 px-3 md:px-4 font-bold text-slate-700 text-xs md:text-sm">Name</th>
                <th className="text-left py-3 px-3 md:px-4 font-bold text-slate-700 text-xs md:text-sm">Qualification</th>
                <th className="text-left py-3 px-3 md:px-4 font-bold text-slate-700 text-xs md:text-sm">Subjects</th>
                <th className="text-left py-3 px-3 md:px-4 font-bold text-slate-700 text-xs md:text-sm">Status</th>
                <th className="text-center py-3 px-3 md:px-4 font-bold text-slate-700 text-xs md:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map((f, index) => (
                <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                  <td className="py-3 md:py-4 px-3 md:px-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {f.avatar}
                      </div>
                      <span className="font-medium text-slate-900 text-xs md:text-sm truncate">{f.name}</span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 text-slate-600 text-xs md:text-sm truncate">{f.qualification}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 text-slate-600 text-xs md:text-sm truncate">{f.subjects}</td>
                <td className="py-3 md:py-4 px-3 md:px-4">
                  <span className={`text-xs font-bold px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${
                    f.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {f.status}
                  </span>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4">
                  <div className="flex items-center justify-center gap-1 md:gap-2">
                    {f.status === 'Pending' && (
                      <>
                        <button className="p-1 md:p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                        <button className="p-1 md:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <XCircle className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </>
                    )}
                    {f.status === 'Approved' && (
                      <span className="text-green-600 font-semibold text-xs md:text-sm">Verified</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
