'use client'

import { motion } from 'framer-motion'

export function GlassStatCard({
  title,
  value,
  risk,
}: {
  title: string
  value: string
  risk: 'low' | 'medium' | 'high'
}) {
  const riskTone = risk === 'high' ? 'text-neon-red' : risk === 'medium' ? 'text-amber-300' : 'text-emerald-300'

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 0 26px rgba(56,189,248,0.28)' }}
      className="glass rounded-2xl p-5"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{title}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-3xl font-semibold text-slate-100">{value}</p>
        <p className={`text-sm font-medium capitalize ${riskTone}`}>{risk} risk</p>
      </div>
    </motion.div>
  )
}
