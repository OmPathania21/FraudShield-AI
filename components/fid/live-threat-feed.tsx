'use client'

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type LiveThreatFeedProps = {
  entries: string[]
}

export function LiveThreatFeed({ entries }: LiveThreatFeedProps) {
  const [pointer, setPointer] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setPointer((prev) => (prev >= entries.length ? 3 : prev + 1))
    }, 1600)
    return () => clearInterval(timer)
  }, [entries.length])

  const visible = useMemo(() => entries.slice(0, pointer), [entries, pointer])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Threat Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[260px] space-y-2 overflow-auto rounded-xl border border-white/10 bg-black/70 p-3 font-mono text-xs">
          {visible.map((entry) => (
            <div key={entry} className={entry.includes('[CRITICAL]') || entry.includes('[HIGH]') ? 'text-fid-red' : 'text-fid-ash'}>
              &gt; {entry}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
