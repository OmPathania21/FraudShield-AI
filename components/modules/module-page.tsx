type ModulePageProps = {
  moduleName: string
  objective: string
  inputs: string[]
  outputs: string[]
}

export function ModulePage({ moduleName, objective, inputs, outputs }: ModulePageProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr]">
      <section className="space-y-4">
        <div className="glass rounded-2xl p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Module Objective</h2>
          <p className="mt-3 text-sm text-slate-200">{objective}</p>
        </div>

        <div className="glass rounded-2xl p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Required Inputs</h2>
          <ul className="mt-3 space-y-2">
            {inputs.map((item) => (
              <li key={item} className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="glass rounded-2xl p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Expected Outputs</h2>
          <ul className="mt-3 space-y-2">
            {outputs.map((item) => (
              <li key={item} className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Current State</h2>
          <div className="mt-3 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 text-sm text-slate-300">
            <p>{moduleName} has no ingested records yet.</p>
            <p className="mt-2 text-slate-400">Connect data sources to start analysis and generate reports.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
