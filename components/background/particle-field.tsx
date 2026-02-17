'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export function ParticleField() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: { value: 65 },
        color: { value: ['#38bdf8', '#a78bfa', '#fb7185'] },
        links: { enable: true, color: '#334155', distance: 140, opacity: 0.3 },
        move: { enable: true, speed: 1.2 },
        opacity: { value: 0.55 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
      background: { color: 'transparent' },
    }),
    [],
  )

  if (!ready) return null

  return <Particles id="fid-particles" options={options} className="pointer-events-none absolute inset-0" />
}
