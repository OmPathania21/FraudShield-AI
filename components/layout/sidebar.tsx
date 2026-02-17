'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  BellDot,
  Bot,
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
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <motion.aside
      animate={{ width: collapsed ? 86 : 290 }}
      transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      className="glass relative z-20 hidden rounded-2xl p-3 lg:block"
    >
      <button
        onClick={() => setCollapsed((v) => !v)}
        className="mb-4 w-full rounded-xl border border-slate-700/60 bg-slate-900/70 px-3 py-2 text-left text-xs text-slate-300"
      >
        {collapsed ? 'Expand' : 'Collapse'}
      </button>

      <nav className="space-y-2">
        {modules.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02, x: 2 }}
            >
              <Link
                href={item.href}
                className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-sm transition ${
                  isActive
                  ? 'border-neon-blue/50 bg-neon-blue/10 text-neon-blue shadow-glow'
                  : 'border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-neon-purple/50 hover:text-neon-purple'
                }`}
              >
                <Icon size={18} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            </motion.div>
          )
        })}
      </nav>
    </motion.aside>
  )
}
