import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function AIModelSandboxPage() {
  return (
    <AppShell
      title="AI Model Sandbox"
      subtitle="Test prompts and model outputs in a controlled, isolated evaluation environment."
      badges={['No Model Endpoint Connected']}
    >
      <ModulePage
        moduleName="AI Model Sandbox"
        objective="Validate prompt safety, injection resistance, and policy compliance before production rollout."
        inputs={['Prompt test set', 'Model endpoint', 'Safety policy rules']}
        outputs={['Policy compliance results', 'Injection resilience findings', 'Mitigation checklist']}
      />
    </AppShell>
  )
}
