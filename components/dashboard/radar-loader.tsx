'use client'

import { motion } from 'framer-motion'

export function RadarLoader() {
  return (
    <div className="glass flex h-56 items-center justify-center rounded-2xl">
      <div className="relative h-36 w-36 rounded-full border border-neon-blue/40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[1px] w-1/2 origin-left -translate-y-1/2 bg-gradient-to-r from-neon-blue to-transparent" />
        </motion.div>
        <div className="absolute inset-[18%] rounded-full border border-neon-purple/30" />
        <div className="absolute inset-[36%] rounded-full border border-neon-red/35" />
      </div>
    </div>
  )
}
