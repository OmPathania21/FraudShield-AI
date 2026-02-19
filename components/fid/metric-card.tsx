'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type MetricCardProps = {
  label: string
  score: number
  trend: number[]
}

export function MetricCard({ label, score, trend }: MetricCardProps) {
  const riskTone = score >= 75 ? 'text-fid-red' : score >= 55 ? 'text-orange-400' : 'text-emerald-400'

  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Card className="rounded-2xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-base text-fid-white">{label}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`text-4xl font-semibold ${riskTone}`}>{score}%</p>
          <div className="mt-4 flex items-end gap-1.5">
            {trend.map((value, index) => (
              <motion.div
                key={`${label}-${index}`}
                initial={{ height: 4 }}
                animate={{ height: `${value * 0.48}px` }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="w-full rounded-full bg-fid-red/70"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
