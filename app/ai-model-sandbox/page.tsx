import { AppShell } from '@/components/layout/app-shell'
import { AISandbox } from '@/components/fid/ai-sandbox'

export default function AIModelSandboxPage() {
  return (
    <AppShell
      title="AI Model Sandbox"
          subtitle="Probe model boundaries against malicious prompts and injection attempts."
      badges={['No Model Endpoint Connected']}
    >
          <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
            <AISandbox />
            <div className="glass space-y-4 rounded-2xl p-5 text-sm text-fid-ash">
              <h3 className="text-lg font-semibold text-white">Simulation Telemetry</h3>
              <p>Policy bypass attempts: 12</p>
              <p>Blocked adversarial chains: 10</p>
              <p>Potential vulnerabilities: 2</p>
              <p className="rounded-xl border border-fid-red/40 bg-fid-red/10 p-3 text-white">
                Recommended: Tighten instruction hierarchy and output filters.
              </p>
            </div>
          </section>
    </AppShell>
  )
}
