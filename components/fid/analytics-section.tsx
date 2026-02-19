'use client'

import { Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line, CartesianGrid, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type TrendPoint = { t: string; risk: number; phishing: number; spoof: number }
type DistributionPoint = { name: string; value: number; color: string }
type HeatmapPoint = { zone: string; risk: number }

type AnalyticsSectionProps = {
  trendData: TrendPoint[]
  distributionData: DistributionPoint[]
  heatmapData: HeatmapPoint[]
}

export function AnalyticsSection({ trendData, distributionData, heatmapData }: AnalyticsSectionProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <CardHeader>
          <CardTitle>Fraud Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="t" stroke="#A8A8A8" />
              <YAxis stroke="#A8A8A8" />
              <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.2)' }} />
              <Line dataKey="risk" stroke="#DC0000" strokeWidth={3} dot={false} />
              <Line dataKey="phishing" stroke="#9d0f0f" strokeWidth={2} dot={false} />
              <Line dataKey="spoof" stroke="#6b0a0a" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scan Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={distributionData} innerRadius={65} outerRadius={100} dataKey="value" paddingAngle={2}>
                {distributionData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.2)' }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="xl:col-span-3">
        <CardHeader>
          <CardTitle>Risk Heatmap</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {heatmapData.map((zone) => (
            <div key={zone.zone} className="rounded-xl border border-white/10 bg-black/50 p-3">
              <p className="text-xs uppercase tracking-cinematic text-fid-ash">{zone.zone}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{zone.risk}%</p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-fid-red" style={{ width: `${zone.risk}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
