'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Sidebar } from '@/components/layout/sidebar'
import { MovingGrid } from '@/components/background/moving-grid'

const ParticleField = dynamic(() => import('@/components/background/particle-field').then((m) => m.ParticleField), {
  ssr: false,
})

type AppShellProps = {
  title: string
  subtitle: string
  badges?: string[]
  children: React.ReactNode
}

export function AppShell({ title, subtitle, badges = [], children }: AppShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden p-4 lg:p-6">
      <MovingGrid />
      <ParticleField />

      <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-[auto_1fr]">
        <Sidebar />

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <header className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-cinematic text-fid-ash">FID Command Center</p>
            <h1 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">{title}</h1>
            <p className="mt-2 text-sm text-fid-ash">{subtitle}</p>

            {badges.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-fid-red/50 bg-fid-red/15 px-3 py-1 text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </header>

          {children}
        </motion.section>
      </div>
    </main>
  )
}
