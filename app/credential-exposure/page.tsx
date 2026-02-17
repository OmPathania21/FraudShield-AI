import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function CredentialExposurePage() {
  return (
    <AppShell
      title="Credential Exposure"
      subtitle="Track potential leaks of keys, tokens, and passwords across monitored sources."
      badges={['No Secret Source Connected']}
    >
      <ModulePage
        moduleName="Credential Exposure"
        objective="Detect and classify exposed credentials and provide immediate remediation guidance."
        inputs={['Code repository events', 'Leak feed ingestion', 'Secret pattern rules']}
        outputs={['Exposure alerts', 'Affected asset mapping', 'Rotation and revocation actions']}
      />
    </AppShell>
  )
}
