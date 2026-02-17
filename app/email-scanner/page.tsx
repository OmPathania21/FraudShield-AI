import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function EmailScannerPage() {
  return (
    <AppShell
      title="Email Scanner"
      subtitle="Analyze inbound and outbound emails for phishing and spoofing indicators."
      badges={['No Mail Feed Connected']}
    >
      <ModulePage
        moduleName="Email Scanner"
        objective="Inspect message headers, sender authenticity, and body patterns for phishing risk."
        inputs={['Mailbox connection', 'Header metadata', 'Email body and links']}
        outputs={['Risk classification', 'Spoofing indicators', 'Recommended mitigation actions']}
      />
    </AppShell>
  )
}
