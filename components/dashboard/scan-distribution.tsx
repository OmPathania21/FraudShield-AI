'use client'

import { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { distributionData } from '@/components/data/sample-data'

export function ScanDistribution() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-100">Scan Distribution</h3>
      <div className="h-56">
        {!mounted ? (
          <div className="h-full w-full animate-pulse rounded-xl bg-slate-900/60" />
        ) : distributionData.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/60 text-sm text-slate-400">
            No distribution data available yet.
          </div>
        ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={distributionData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} label>
              {distributionData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: '#020617', border: '1px solid #334155' }} />
          </PieChart>
        </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
