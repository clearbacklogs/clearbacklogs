'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react'

export function PaymentSection() {
  const payments = [
    {
      subject: 'Data Structures & Algorithms',
      fee: 3500,
      paid: 3500,
      status: 'approved',
    },
    {
      subject: 'Database Management Systems',
      fee: 3500,
      paid: 3500,
      status: 'approved',
    },
    {
      subject: 'Web Development Bootcamp',
      fee: 4500,
      paid: 2250,
      status: 'partial',
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Payment Status</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {payments.map((payment, index) => {
          const pending = payment.fee - payment.paid
          const percentage = (payment.paid / payment.fee) * 100

          return (
            <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-4 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">{payment.subject}</h3>
                </div>
                <div className="flex items-center gap-1">
                  {payment.status === 'approved' && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  {payment.status === 'partial' && (
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Total Fee</span>
                  <span className="font-bold text-slate-900">₹{payment.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Amount Paid</span>
                  <span className="font-bold text-green-600">₹{payment.paid}</span>
                </div>
                {pending > 0 && (
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Pending</span>
                    <span className="font-bold text-orange-600">₹{pending}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-slate-600">Progress</span>
                  <span className="text-xs font-bold text-slate-900">{Math.round(percentage)}%</span>
                </div>
                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {pending > 0 && (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-semibold">
                  Pay ₹{pending}
                </Button>
              )}
              {payment.status === 'approved' && (
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Fully Paid</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-slate-900 mb-2">Need to Upload Payment Screenshot?</h3>
        <p className="text-slate-600 text-sm mb-4">
          If you&apos;ve already paid but it&apos;s showing as pending, upload your payment screenshot for verification.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10 font-semibold">
          Upload Payment Screenshot
        </Button>
      </div>
    </div>
  )
}
