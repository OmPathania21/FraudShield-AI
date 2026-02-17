'use client'

import { motion } from 'framer-motion'
import { activityFeed } from '@/components/data/sample-data'

export function ActivityFeed() {
  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-100">Real-time Activity Feed</h3>
      {activityFeed.length === 0 ? (
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-3 text-sm text-slate-400">
          No activity events available yet.
        </div>
      ) : (
        <div className="space-y-2">
          {activityFeed.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-3 text-sm text-slate-300"
            >
              {item}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
