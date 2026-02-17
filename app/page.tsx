'use client'

import dynamic from 'next/dynamic'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { GlassStatCard } from '@/components/dashboard/glass-stat-card'
import { RadarLoader } from '@/components/dashboard/radar-loader'
import { RiskHeatmap } from '@/components/dashboard/risk-heatmap'
import { RiskOrb } from '@/components/dashboard/risk-orb'
import { ScanDistribution } from '@/components/dashboard/scan-distribution'
import { TrendChart } from '@/components/dashboard/trend-chart'
import { TypingAnalysis } from '@/components/dashboard/typing-analysis'
import { AppShell } from '@/components/layout/app-shell'

const FraudGlobe = dynamic(() => import('@/components/background/fraud-globe').then((m) => m.FraudGlobe), {
  ssr: false,
})

export default function DashboardPage() {
  return (
    <AppShell
      title="Premium Cybersecurity Command Center"
      subtitle="Operational view across all detection modules."
      badges={['No Live Data Connected', 'Awaiting Source Integration']}
    >
      <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
        <RiskOrb score={0} />
        <div className="grid gap-4 md:grid-cols-3">
          <GlassStatCard title="AI Phishing Detection" value="No Data" risk="low" />
          <GlassStatCard title="Website Spoofing Risk" value="No Data" risk="low" />
          <GlassStatCard title="Attachment Threat Score" value="No Data" risk="low" />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <TrendChart />
        <ScanDistribution />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <RiskHeatmap />
        <ActivityFeed />
        <div className="space-y-4">
          <RadarLoader />
          <TypingAnalysis />
          <FraudGlobe />
        </div>
      </div>
    </AppShell>
  )
}
