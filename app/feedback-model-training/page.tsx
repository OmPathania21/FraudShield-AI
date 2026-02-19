import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function FeedbackModelTrainingPage() {
  return (
    <AppShell
      title="Feedback & Model Training"
      subtitle="Capture analyst feedback, annotate false positives, and tune model response quality."
      badges={['Training Queue Active']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Annotation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              className="min-h-[220px]"
              defaultValue="False positive triggered by legitimate vendor invoice. Improve contextual entity trust weighting."
            />
            <Button className="w-full">Submit to Training Queue</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Model Improvement Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-fid-ash">
            <p>Queued annotations: 148</p>
            <p>Last retrain cycle: 4 hours ago</p>
            <p>Precision uplift: +6.4%</p>
            <p className="rounded-xl border border-fid-red/40 bg-fid-red/10 p-3 text-white">Next scheduled rollout: 22:00 UTC</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
