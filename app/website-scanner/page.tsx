import { AppShell } from '@/components/layout/app-shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function WebsiteScannerPage() {
  return (
    <AppShell
      title="Website Scanner"
      subtitle="Scan URL integrity, spoof vectors, SSL health, and browser-level risk indicators."
      badges={['Scanner Active']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.15fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>URL Threat Scan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="https://suspicious-domain-example.com" />
            <Button size="lg" className="w-full">Run Full Scan</Button>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-2 w-3/4 animate-pulse rounded-full bg-fid-red" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Threat Verdict</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/40 bg-fid-red/10 p-3 text-white">Spoof Probability: 78%</p>
            <p>SSL Integrity: Valid but issuer chain anomaly detected</p>
            <p>Domain Age: 3 months</p>
            <p>Cookie Risk: Elevated third-party fingerprinting patterns</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
