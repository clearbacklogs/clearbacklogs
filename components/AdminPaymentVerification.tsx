'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Eye } from 'lucide-react'

export function AdminPaymentVerification() {
  const payments = [
    {
      student: 'Priya Sharma',
      batch: 'Java Programming',
      amount: 3500,
      status: 'Pending',
      uploadDate: '2024-06-03',
    },
    {
      student: 'Arjun Desai',
      batch: 'Database Masters',
      amount: 2500,
      status: 'Approved',
      uploadDate: '2024-06-02',
    },
    {
      student: 'Anjali Nair',
      batch: 'Web Development',
      amount: 4000,
      status: 'Pending',
      uploadDate: '2024-06-03',
    },
    {
      student: 'Rohan Patel',
      batch: 'Java Programming',
      amount: 3500,
      status: 'Rejected',
      uploadDate: '2024-06-01',
    },
  ]

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Verification</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-blue-100">
              <th className="text-left py-3 px-4 font-bold text-slate-700">Student</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Batch</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Amount</th>
              <th className="text-left py-3 px-4 font-bold text-slate-700">Status</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Screenshot</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b border-blue-50 hover:bg-blue-50 transition-colors">
                <td className="py-4 px-4 font-medium text-slate-900">{payment.student}</td>
                <td className="py-4 px-4 text-slate-600">{payment.batch}</td>
                <td className="py-4 px-4 font-bold text-slate-900">₹{payment.amount.toLocaleString()}</td>
                <td className="py-4 px-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    payment.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : payment.status === 'Rejected'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="mx-auto p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    {payment.status === 'Pending' && (
                      <>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <XCircle className="h-5 w-5" />
                        </button>
                      </>
                    )}
                    {payment.status === 'Approved' && (
                      <span className="text-green-600 font-semibold text-sm">Verified</span>
                    )}
                    {payment.status === 'Rejected' && (
                      <span className="text-red-600 font-semibold text-sm">Rejected</span>
                    )}
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
