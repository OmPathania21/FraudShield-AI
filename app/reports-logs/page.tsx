import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function ReportsLogsPage() {
  return (
    <AppShell
      title="Reports & Logs"
      subtitle="Review generated findings, audit entries, and investigation timelines."
      badges={['No Report Store Connected']}
    >
      <ModulePage
        moduleName="Reports & Logs"
        objective="Provide traceable records for incidents, analyst actions, and compliance reporting."
        inputs={['Report storage backend', 'Audit log stream', 'Incident metadata']}
        outputs={['Exportable reports', 'Chronological event logs', 'Compliance-ready summaries']}
      />
    </AppShell>
  )
}
