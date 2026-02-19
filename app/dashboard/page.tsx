import { AnalyticsSection } from '@/components/fid/analytics-section'
import { AISandbox } from '@/components/fid/ai-sandbox'
import { LiveThreatFeed } from '@/components/fid/live-threat-feed'
import { MetricCard } from '@/components/fid/metric-card'
import { RiskGauge } from '@/components/fid/risk-gauge'
import {
  fraudTrend,
  riskHeatmap,
  scanDistribution,
  threatFeed,
  threatMetrics,
} from '@/components/data/sample-data'
import { AppShell } from '@/components/layout/app-shell'

export default function DashboardPage() {
  return (
    <AppShell
      title="Fraud Intelligence Defense"
      subtitle="Live operational command across digital fraud vectors."
      badges={['Global Risk: 76', 'Autonomous Protection Enabled']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.15fr_1fr]">
        <RiskGauge score={76} />
        <div className="grid gap-4 md:grid-cols-2">
          {threatMetrics.slice(0, 4).map((metric) => (
            <MetricCard key={metric.label} label={metric.label} score={metric.score} trend={metric.trend} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {threatMetrics.map((metric) => (
          <div key={`compact-${metric.label}`} className="xl:col-span-1">
            <MetricCard label={metric.label} score={metric.score} trend={metric.trend} />
          </div>
        ))}
      </section>

      <AnalyticsSection trendData={fraudTrend} distributionData={scanDistribution} heatmapData={riskHeatmap} />

      <section className="grid gap-4 xl:grid-cols-2">
        <LiveThreatFeed entries={threatFeed} />
        <AISandbox />
      </section>
    </AppShell>
  )
}
