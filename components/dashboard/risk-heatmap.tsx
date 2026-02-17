export function RiskHeatmap() {
  const levels = ['bg-emerald-500/60', 'bg-amber-400/80', 'bg-neon-red/80', 'bg-neon-blue/70', 'bg-neon-purple/70']

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-100">Risk Heatmap Visualization</h3>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className={`h-6 rounded ${levels[i % levels.length]} shadow-inner`} />
        ))}
      </div>
    </div>
  )
}
