import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function CredentialExposurePage() {
  return (
    <AppShell
      title="Credential Exposure"
      subtitle="Detect leaked credentials, access tokens, and sensitive keys in raw text streams."
      badges={['No Secret Source Connected']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Paste Potentially Exposed Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              className="min-h-[220px]"
              defaultValue={'DB_PASSWORD=Prod!Secure@112\nAWS_SECRET_ACCESS_KEY=AKIA**************'}
            />
            <Button className="w-full">Detect Exposed Secrets</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/50 bg-fid-red/10 p-3 text-white">Exposure Severity: High</p>
            <p>Detected secret types: Database password, cloud access key</p>
            <p>Masked preview: AWS_SECRET_ACCESS_KEY=AKIA••••••••••••</p>
            <p>Recommended: Rotate keys and invalidate active sessions immediately.</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
