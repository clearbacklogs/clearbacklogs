'use client'

import { Button } from '@/components/ui/button'
import { Edit2, Trash2 } from 'lucide-react'

export function AdminBatchManagement() {
  const batches = [
    {
      name: 'Java Programming Intensive',
      faculty: 'Dr. Rajesh Kumar',
      students: 28,
      fee: 3500,
      status: 'Active',
    },
    {
      name: 'Database Masters',
      faculty: 'Prof. Aisha Patel',
      students: 32,
      fee: 2500,
      status: 'Active',
    },
    {
      name: 'Web Development Bootcamp',
      faculty: 'Dr. Vikram Singh',
      students: 31,
      fee: 4000,
      status: 'Active',
    },
    {
      name: 'Advanced Python',
      faculty: 'Prof. Sneha Reddy',
      students: 0,
      fee: 3000,
      status: 'Coming Soon',
    },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Batch Management</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-blue-100">
              <th className="text-left py-3 px-4 font-bold text-slate-700">Batch Name</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Faculty</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Students</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Fee</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Status</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900">{batch.name}</td>
                <td className="py-4 px-4 text-slate-600">{batch.faculty}</td>
                <td className="py-4 px-4">
                  <span className="font-bold text-blue-600">{batch.students}</span>
                </td>
                <td className="py-4 px-4 font-bold text-slate-900">₹{batch.fee.toLocaleString()}</td>
                <td className="py-4 px-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    batch.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {batch.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
