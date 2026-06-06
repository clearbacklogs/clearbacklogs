'use client'

import { CheckCircle, Clock, XCircle } from 'lucide-react'

export function FacultyStudents() {
  const students = [
    { name: 'Priya Sharma', course: 'B.Tech (CSE)', subject: 'Data Structures', status: 'Paid', enrollDate: '2024-05-15' },
    { name: 'Arjun Desai', course: 'B.Tech (IT)', subject: 'Database Systems', status: 'Paid', enrollDate: '2024-05-18' },
    { name: 'Anjali Nair', course: 'M.Tech (CSE)', subject: 'Web Development', status: 'Pending', enrollDate: '2024-05-20' },
    { name: 'Rohan Patel', course: 'B.Tech (ECE)', subject: 'Data Structures', status: 'Paid', enrollDate: '2024-05-22' },
    { name: 'Neha Singh', course: 'MBA', subject: 'Finance & Accounting', status: 'Paid', enrollDate: '2024-05-25' },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Students</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-blue-100">
              <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Student Name</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Course</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Payment Status</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                <td className="px-4 py-4 text-sm font-semibold text-slate-900">{student.name}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{student.course}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{student.subject}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {student.status === 'Paid' ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">Paid</span>
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-semibold text-yellow-600">Pending</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">{new Date(student.enrollDate).toLocaleDateString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
