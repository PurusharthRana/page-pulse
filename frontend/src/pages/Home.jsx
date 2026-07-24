import { useState } from 'react'
import Hero from '../components/Hero.jsx'
import AuditForm from '../components/AuditForm.jsx'
import ResultCards from '../components/ResultCards.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'
import { runAudit } from '../services/auditService.js'

export default function Home() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [result, setResult] = useState(null)
  const [errorCode, setErrorCode] = useState(null)

  async function handleAnalyze(url) {
    setStatus('loading')
    setErrorCode(null)
    try {
      const data = await runAudit(url)
      setResult(data)
      setStatus('success')
    } catch (err) {
      setErrorCode(err.code || 'SERVER_ERROR')
      setStatus('error')
    }
  }

  return (
    <main className="flex-1">
      <Hero />

      <section className="mx-auto max-w-2xl px-6">
        <AuditForm onAnalyze={handleAnalyze} isLoading={status === 'loading'} />
        <p className="mt-3 text-center text-xs text-ink-500/80">
          Try appending <code className="rounded bg-ink-900/5 px-1 py-0.5 font-mono">timeout</code> or{' '}
          <code className="rounded bg-ink-900/5 px-1 py-0.5 font-mono">error</code> to the URL to preview
          error states.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-3xl px-6 pb-20">
        {status === 'loading' && <LoadingSkeleton />}
        {status === 'error' && <ErrorAlert code={errorCode} />}
        {status === 'success' && result && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink-900">Audit Results</h2>
              <span className="text-xs font-medium text-ink-500">Scanned just now</span>
            </div>
            <ResultCards data={result} />
          </>
        )}
      </section>
    </main>
  )
}
