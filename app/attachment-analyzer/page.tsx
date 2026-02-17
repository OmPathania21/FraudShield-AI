import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function AttachmentAnalyzerPage() {
  return (
    <AppShell
      title="Attachment Analyzer"
      subtitle="Inspect file attachments for malware signatures, obfuscation, and exploit behavior."
      badges={['No File Stream Connected']}
    >
      <ModulePage
        moduleName="Attachment Analyzer"
        objective="Perform static and dynamic checks on uploaded files to identify suspicious or malicious traits."
        inputs={['File upload stream', 'File metadata', 'Sandbox execution output']}
        outputs={['Threat level', 'Behavior indicators', 'Containment recommendations']}
      />
    </AppShell>
  )
}
