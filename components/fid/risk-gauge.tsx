'use client'

import { motion } from 'framer-motion'

type RiskGaugeProps = {
  score: number
}

export function RiskGauge({ score }: RiskGaugeProps) {
  const riskTier = score >= 80 ? 'Critical' : score >= 65 ? 'High' : score >= 45 ? 'Elevated' : 'Stable'
  const circumference = 2 * Math.PI * 120
  const dash = (score / 100) * circumference

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-8">
      <div className="absolute inset-0 bg-vignette opacity-30" />
      <div className="relative flex min-h-[420px] items-center justify-center">
        <svg width="300" height="300" viewBox="0 0 300 300" className="-rotate-90">
          <circle cx="150" cy="150" r="120" stroke="rgba(255,255,255,0.12)" strokeWidth="18" fill="none" />
          <motion.circle
            cx="150"
            cy="150"
            r="120"
            stroke="#DC0000"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray: `${dash} ${circumference}` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className={score > 70 ? 'red-pulse' : ''}
          />
        </svg>

        <div className="absolute text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[72px] font-semibold leading-none text-white"
          >
            {score}
          </motion.p>
          <p className="mt-2 text-xs uppercase tracking-cinematic text-fid-ash">Global Risk Index</p>
          <p className="mt-3 inline-flex rounded-full border border-fid-red/50 px-3 py-1 text-sm text-fid-white">{riskTier}</p>
        </div>
      </div>
    </div>
  )
}
