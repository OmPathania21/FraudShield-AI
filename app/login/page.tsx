'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-fid-black px-4">
      <div className="pointer-events-none absolute inset-0 fid-grid grid-drift opacity-30" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fid-red/30 blur-[120px]" />

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="w-full max-w-md border border-white/15 bg-black/65">
          <CardHeader>
            <CardTitle>Secure Login</CardTitle>
            <CardDescription>Authenticate to enter FID command center</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enterprise Email" />
            <Input placeholder="Password" type="password" />
            <Button asChild size="lg" className="w-full">
              <Link href="/dashboard">Enter Command Center</Link>
            </Button>
            <p className="text-center text-xs text-fid-ash">Zero-trust session • Adaptive risk validation</p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}
