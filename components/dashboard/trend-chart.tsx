'use client'

import { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { trendData } from '@/components/data/sample-data'

export function TrendChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-100">Fraud Trend Line</h3>
      <div className="h-56">
        {!mounted ? (
          <div className="h-full w-full animate-pulse rounded-xl bg-slate-900/60" />
        ) : trendData.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/60 text-sm text-slate-400">
            No trend data available yet.
          </div>
        ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData}>
            <defs>
              <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1e293b" strokeDasharray="4 4" />
            <XAxis dataKey="t" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: '#020617', border: '1px solid #334155' }} />
            <Area type="monotone" dataKey="risk" stroke="#38bdf8" fillOpacity={1} fill="url(#trend)" />
          </AreaChart>
        </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
