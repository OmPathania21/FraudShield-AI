'use client'

import { motion } from 'framer-motion'

export function TypingAnalysis() {
  const text = 'AI analysis: prompt injection vector blocked, no sensitive data exfiltration detected.'

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-100">AI Analysis Console</h3>
      <motion.p
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.6, ease: 'easeInOut' }}
        className="overflow-hidden whitespace-nowrap text-sm text-neon-blue"
      >
        {text}
      </motion.p>
    </div>
  )
}
