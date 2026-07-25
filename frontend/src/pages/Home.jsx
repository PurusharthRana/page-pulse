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
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleAnalyze(url) {
    setStatus('loading');
    setErrorMessage(null);
    try {
      const data = await runAudit(url);
      setResult(data);
      setStatus('success');
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <main className="flex-1">
      <Hero />

      <section className="mx-auto max-w-2xl px-6">
        <AuditForm onAnalyze={handleAnalyze} isLoading={status === 'loading'} />
      </section>

      <section className="mx-auto mt-10 max-w-3xl px-6 pb-20">
        {status === 'loading' && <LoadingSkeleton />}
        {status === 'error' && <ErrorAlert message={errorMessage} />}
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
