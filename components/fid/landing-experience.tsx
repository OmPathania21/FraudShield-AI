'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CyberBackground } from '@/components/fid/cyber-background'

const modules = [
  'AI Email Detection',
  'Website Spoofing Defense',
  'Attachment Scanner',
  'Credential Exposure Monitor',
  'Deepfake Voice Analyzer',
  'AI Model Sandbox',
]

export function LandingExperience() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy',
          start: 'top 75%',
        },
      })

      gsap.fromTo(
        '.parallax-layer',
        { y: -40 },
        {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: '.philosophy',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      gsap.from('.stat-rise', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.threat-reality',
          start: 'top 70%',
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative bg-fid-black text-fid-white">
      <CyberBackground />
      <div className="pointer-events-none absolute inset-0 fid-grid grid-drift opacity-35" />

      <section className="section-block relative flex items-center">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-cinematic text-fid-ash"
          >
            FID — Fraud Intelligence Defense
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="cinematic-heading mt-5 max-w-5xl text-5xl font-semibold md:text-7xl xl:text-8xl"
          >
            FRAUD INTELLIGENCE REDEFINED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg text-fid-ash"
          >
            AI-powered defense against next-generation digital fraud.
          </motion.p>

          <div className="mt-12 flex items-center gap-4">
            <div className="red-pulse h-24 w-24 rounded-full bg-fid-red/30 blur-sm" />
            <div className="h-16 w-16 rounded-full border border-fid-red/70 bg-fid-red/20" />
          </div>

          <div className="mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-cinematic text-fid-ash">
            Scroll to Explore <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      <section className="section-block philosophy relative flex items-center">
        <div className="parallax-layer mx-auto max-w-7xl">
          <p className="reveal-text text-xs uppercase tracking-cinematic text-fid-ash">Core Philosophy</p>
          <h2 className="reveal-text mt-6 cinematic-heading text-5xl font-semibold md:text-7xl">
            Precision. Intelligence. Control.
          </h2>
          <p className="reveal-text mt-8 max-w-3xl text-lg text-fid-ash">
            Built like a race machine, tuned for fraud detection at enterprise scale with ruthless clarity.
          </p>
        </div>
      </section>

      <section className="section-block threat-reality flex items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-cinematic text-fid-ash">Threat Reality</p>
            <p className="mt-5 text-4xl font-semibold md:text-5xl">Fraud acceleration is no longer linear.</p>
          </div>
          <div className="space-y-4">
            <div className="stat-rise glass rounded-3xl p-8">
              <p className="text-5xl font-semibold text-fid-red">82%</p>
              <p className="mt-2 text-fid-ash">Increase in AI phishing attacks</p>
            </div>
            <div className="stat-rise glass rounded-3xl p-8">
              <p className="text-5xl font-semibold text-fid-red">67%</p>
              <p className="mt-2 text-fid-ash">Deepfake fraud growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-cinematic text-fid-ash">System Overview</p>
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6">
            {modules.map((item) => (
              <motion.article
                key={item}
                whileHover={{ y: -5 }}
                className="glass min-h-[320px] min-w-[320px] snap-start rounded-3xl p-8 md:min-w-[420px]"
              >
                <p className="text-xs uppercase tracking-cinematic text-fid-ash">Module</p>
                <h3 className="mt-6 text-3xl font-semibold leading-tight">{item}</h3>
                <div className="mt-10 h-28 rounded-2xl border border-fid-red/40 bg-gradient-to-r from-fid-red/20 to-transparent" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block flex items-center justify-center">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="cinematic-heading text-5xl font-semibold md:text-7xl">ENTER THE COMMAND CENTER</h2>
          <Button asChild size="lg" className="mt-10 h-14 px-10 text-base uppercase tracking-cinematic">
            <Link href="/login">Authenticate Access</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
