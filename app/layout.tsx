import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FID — Fraud Intelligence Defense',
  description: 'Cinematic AI-powered cybersecurity command center',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
