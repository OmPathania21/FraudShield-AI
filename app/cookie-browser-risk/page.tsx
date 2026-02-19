import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CookieBrowserRiskPage() {
  return (
    <AppShell
      title="Cookie & Browser Risk"
      subtitle="Audit browser session posture, cookie integrity, and hijack-prone configuration flaws."
      badges={['Session Analyzer Ready']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Session Endpoint</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="https://app.yourdomain.com/session" />
            <Button className="w-full">Inspect Browser Risk</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inspection Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/50 bg-fid-red/10 p-3 text-white">Cookie Risk: Elevated</p>
            <p>Missing flags: HttpOnly on 1 auth cookie</p>
            <p>SameSite policy: Partially strict</p>
            <p>Session fixation risk: Medium</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
