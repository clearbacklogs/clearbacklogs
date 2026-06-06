'use client'

import { DollarSign, Clock, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FacultyEarnings() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-900">Earnings</h2>

      {/* Earnings Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-4">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-1">Total Earnings</p>
          <p className="text-3xl font-bold text-slate-900">₹2,45,000</p>
          <p className="text-xs text-slate-500 mt-2">All time</p>
        </div>

        <div className="bg-white border-2 border-blue-100 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-1">Pending Payments</p>
          <p className="text-3xl font-bold text-slate-900">₹12,500</p>
          <p className="text-xs text-slate-500 mt-2">This month</p>
        </div>

        <div className="bg-white border-2 border-blue-100 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mb-4">
            <TrendingDown className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-1">Commission Deducted</p>
          <p className="text-3xl font-bold text-slate-900">₹5,000</p>
          <p className="text-xs text-slate-500 mt-2">2% this month</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center mb-4">
            <DollarSign className="h-6 w-6 text-green-700" />
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-1">Withdrawable Amount</p>
          <p className="text-3xl font-bold text-green-700">₹2,38,000</p>
          <p className="text-xs text-slate-500 mt-2">Ready to withdraw</p>
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Monthly Earnings Breakdown</h3>
          <div className="space-y-4">
            {[
              { batch: 'Data Structures & Algorithms', students: 24, earning: 72000, commission: 1440 },
              { batch: 'Database Management Systems', students: 18, earning: 45000, commission: 900 },
              { batch: 'Web Development', students: 31, earning: 108500, commission: 2170 },
              { batch: 'Operating Systems', students: 15, earning: 42000, commission: 840 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100">
                <div className="flex-1">
                  <p className="font-bold text-slate-900">{item.batch}</p>
                  <p className="text-sm text-slate-600">{item.students} students</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-bold text-green-600">₹{item.earning.toLocaleString()}</p>
                  <p className="text-xs text-slate-600">Commission: -₹{item.commission}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-slate-600 font-semibold mb-1">Current Month Total</p>
              <p className="text-3xl font-bold text-green-600">₹2,67,500</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 h-10 font-semibold">
              Request Withdrawal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
