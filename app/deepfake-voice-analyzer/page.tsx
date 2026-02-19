import { AppShell } from '@/components/layout/app-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DeepfakeVoiceAnalyzerPage() {
  return (
    <AppShell
      title="Deepfake Voice Analyzer"
      subtitle="Analyze uploaded audio for synthetic signatures, spectral artifacts, and identity spoofing."
      badges={['Voice Forensics Online']}
    >
      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload Audio Evidence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-dashed border-fid-red/40 bg-black/50 p-10 text-center text-fid-ash">
              Drop .wav / .mp3 file for spectral analysis
            </div>
            <div className="h-24 rounded-xl border border-white/10 bg-black/60 p-3">
              <div className="flex h-full items-end gap-1">
                {Array.from({ length: 42 }).map((_, index) => (
                  <div key={index} className="w-full rounded-full bg-fid-red/70" style={{ height: `${10 + ((index * 9) % 54)}px` }} />
                ))}
              </div>
            </div>
            <Button className="w-full">Analyze Voice</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Output</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-fid-ash">
            <p className="rounded-xl border border-fid-red/50 bg-fid-red/10 p-3 text-white">Deepfake Probability: 71%</p>
            <p>Spectrogram inconsistency: Moderate-high</p>
            <p>Formant drift anomaly: Detected across 3 windows</p>
            <p>Voice identity confidence: 39%</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
