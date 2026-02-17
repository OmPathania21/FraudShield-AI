import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function WebsiteScannerPage() {
  return (
    <AppShell
      title="Website Scanner"
      subtitle="Evaluate URLs and page artifacts for spoofing, redirects, and malicious scripts."
      badges={['No URL Queue Connected']}
    >
      <ModulePage
        moduleName="Website Scanner"
        objective="Scan target websites for domain anomalies, script injections, and unsafe redirection behavior."
        inputs={['Target URL', 'DNS and certificate metadata', 'Rendered page source']}
        outputs={['Threat verdict', 'Detected indicators', 'Blocking and response guidance']}
      />
    </AppShell>
  )
}
