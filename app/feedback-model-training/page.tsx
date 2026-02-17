import { AppShell } from '@/components/layout/app-shell'
import { ModulePage } from '@/components/modules/module-page'

export default function FeedbackModelTrainingPage() {
  return (
    <AppShell
      title="Feedback & Model Training"
      subtitle="Collect analyst feedback and prepare labeled data for model improvement cycles."
      badges={['No Feedback Pipeline Connected']}
    >
      <ModulePage
        moduleName="Feedback & Model Training"
        objective="Capture decision feedback and curate high-quality datasets for continuous model refinement."
        inputs={['Analyst verdict submissions', 'Labeling schema', 'Training dataset repository']}
        outputs={['Feedback backlog', 'Training-ready labels', 'Model update readiness indicators']}
      />
    </AppShell>
  )
}
