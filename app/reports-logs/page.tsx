import { AppShell } from '@/components/layout/app-shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReportsLogsPage() {
  return (
    <AppShell
      title="Reports & Logs"
      subtitle="Review incident summaries, compliance posture, and export risk intelligence reports."
      badges={['Compliance Sync Ready']}
    >
      <section className="grid gap-4 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Open Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-semibold text-fid-red">38</p>
            <p className="mt-2 text-sm text-fid-ash">+12% vs previous cycle</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-semibold text-white">112</p>
            <p className="mt-2 text-sm text-fid-ash">Avg response time: 14m</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Compliance Health</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-semibold text-white">94%</p>
            <p className="mt-2 text-sm text-fid-ash">Audit readiness score</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Risk Trend Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-fid-ash">
          <p>AI phishing and deepfake channels remain the top contributors to risk escalation.</p>
          <p>Credential exposure incidents declined 9% after key-rotation policy updates.</p>
          <Button className="w-full md:w-auto">Export Full Report</Button>
        </CardContent>
      </Card>
    </AppShell>
  )
}
