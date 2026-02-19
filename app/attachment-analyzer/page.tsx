import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AttachmentAnalyzerPage() {
  return (
    <AppShell
      title="Attachment Analyzer"
      subtitle="Inspect uploaded files for malware signatures, obfuscated payloads, and embedded links."
      badges={['Sandbox Engine Ready']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Drop File for Scan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-dashed border-fid-red/40 bg-black/50 p-10 text-center text-fid-ash">
              Drag and drop suspicious file or browse manually
            </div>
            <Button className="w-full">Start Deep Scan</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scan Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/50 bg-fid-red/10 p-3 text-white">Risk Score: 79%</p>
            <p>Macro obfuscation: Detected</p>
            <p>Extracted links:</p>
            <ul className="space-y-1">
              <li className="rounded-md bg-black/60 p-2">hxxps://auth-verify-center[.]support</li>
              <li className="rounded-md bg-black/60 p-2">hxxps://secure-gateway-check[.]com</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
