'use client'

import { motion } from 'framer-motion'

export function RiskOrb({ score }: { score: number }) {
  const color = score > 75 ? '#fb7185' : score > 40 ? '#f59e0b' : '#22c55e'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass risk-pulse relative flex h-64 w-64 items-center justify-center rounded-full border"
      style={{ borderColor: `${color}66` }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 14 }}
        className="absolute h-[86%] w-[86%] rounded-full border border-dashed"
        style={{ borderColor: `${color}55` }}
      />
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Global Risk Score</p>
        <p className="mt-2 text-5xl font-semibold" style={{ color }}>
          {score}
        </p>
      </div>
    </motion.div>
  )
}
