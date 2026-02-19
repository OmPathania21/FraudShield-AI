import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function EmailScannerPage() {
  return (
    <AppShell
      title="Email Scanner"
      subtitle="Analyze message intent, social engineering markers, and impersonation vectors."
      badges={['AI Detector Online']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Paste Email Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              className="min-h-[260px]"
              defaultValue={
                'Urgent: Your payroll portal has been locked. Click here immediately to verify your credentials and avoid suspension.'
              }
            />
            <Button className="w-full">Analyze Email</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Explanation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/50 bg-fid-red/10 p-3 text-white">AI Phishing Likelihood: 86%</p>
            <p>
              Suspicious phrase: <span className="text-fid-red">"click here immediately"</span>
            </p>
            <p>Detected urgency coercion and credential harvesting language.</p>
            <p>Sender-domain mismatch confidence: High</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
