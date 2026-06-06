'use client'

export function AdminStudentManagement() {
  const students = [
    { name: 'Priya Sharma', university: 'JNTUH', branch: 'CSE', batches: 2, status: 'Active' },
    { name: 'Arjun Desai', university: 'JNTUK', branch: 'ECE', batches: 1, status: 'Active' },
    { name: 'Anjali Nair', university: 'VTU', branch: 'IT', batches: 3, status: 'Active' },
    { name: 'Rohan Patel', university: 'OU', branch: 'Mechanical', batches: 1, status: 'Inactive' },
    { name: 'Sneha Gupta', university: 'KU', branch: 'Civil', batches: 2, status: 'Active' },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Student Management</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-blue-100">
              <th className="text-left py-3 px-4 font-bold text-slate-700">Name</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">University</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Branch</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Enrolled Batches</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-900">{student.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-600">{student.university}</td>
                <td className="py-4 px-4 text-slate-600">{student.branch}</td>
                <td className="py-4 px-4">
                  <span className="font-bold text-blue-600">{student.batches}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    student.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
