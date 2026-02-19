'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  BellDot,
  Bot,
  ChevronDown,
  ChartNoAxesCombined,
  FileWarning,
  Globe,
  KeyRound,
  LayoutDashboard,
  MailWarning,
  MessageSquareHeart,
  ShieldAlert,
} from 'lucide-react'
import { useState } from 'react'

const modules = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { label: 'Email Scanner', icon: MailWarning, href: '/email-scanner' },
  { label: 'Website Scanner', icon: Globe, href: '/website-scanner' },
  { label: 'Attachment Analyzer', icon: FileWarning, href: '/attachment-analyzer' },
  { label: 'Credential Exposure', icon: KeyRound, href: '/credential-exposure' },
  { label: 'Deepfake Voice Analyzer', icon: BellDot, href: '/deepfake-voice-analyzer' },
  { label: 'AI Model Sandbox', icon: Bot, href: '/ai-model-sandbox' },
  { label: 'Cookie & Browser Risk', icon: ShieldAlert, href: '/cookie-browser-risk' },
  { label: 'Reports & Logs', icon: ChartNoAxesCombined, href: '/reports-logs' },
  { label: 'Feedback & Model Training', icon: MessageSquareHeart, href: '/feedback-model-training' },
]

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="glass relative z-20 rounded-2xl p-3">
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="flex w-full items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/70 px-3 py-2 text-left text-sm text-slate-200"
        >
          <span>{mobileOpen ? 'Collapse Menu' : 'Expand Menu'}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <motion.nav
          initial={false}
          animate={{
            height: mobileOpen ? 'auto' : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.24, ease: 'easeInOut' }}
          className="origin-top overflow-hidden"
        >
          <div className="space-y-2 pt-3">
            {modules.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-sm transition ${
                    isActive
                      ? 'border-neon-blue/50 bg-neon-blue/10 text-neon-blue shadow-glow'
                      : 'border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-neon-purple/50 hover:text-neon-purple'
                  }`}
                >
                  <Icon size={18} />
                  <span className="truncate">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </motion.nav>
      </div>

      <nav className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-2">
        {modules.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <motion.div key={item.label} whileHover={{ scale: 1.02, y: -1 }}>
              <Link
                href={item.href}
                className={`group inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                  isActive
                    ? 'border-neon-blue/50 bg-neon-blue/10 text-neon-blue shadow-glow'
                    : 'border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-neon-purple/50 hover:text-neon-purple'
                }`}
              >
                <Icon size={16} />
                <span className="truncate">{item.label}</span>
              </Link>
            </motion.div>
          )
        })}
      </nav>
    </div>
  )
}
