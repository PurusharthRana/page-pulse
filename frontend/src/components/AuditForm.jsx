import { useState } from 'react'
import { Globe, ArrowRight, Loader2 } from 'lucide-react'

export default function AuditForm({ onAnalyze, isLoading }) {
  const [url, setUrl] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!url.trim() || isLoading) return
    onAnalyze(url.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-fadeUp rounded-2xl border border-ink-900/[0.06] bg-white p-2.5 shadow-soft transition-shadow duration-300 focus-within:shadow-softHover sm:p-3"
      style={{ animationDelay: '220ms' }}
    >
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2.5 rounded-xl px-3.5 py-3 sm:py-2.5">
          <Globe className="h-5 w-5 shrink-0 text-ink-500/70" strokeWidth={2} />
          <input
            type="text"
            inputMode="url"
            autoComplete="off"
            spellCheck={false}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            disabled={isLoading}
            className="w-full min-w-0 bg-transparent text-[15px] text-ink-900 placeholder:text-ink-500/50 focus:outline-none disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-[15px] font-semibold text-white shadow-sm shadow-accent/25 transition-all duration-200 hover:bg-accent-dark hover:shadow-md hover:shadow-accent/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-accent sm:py-2.5"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spinSlow" strokeWidth={2.5} />
              Analyzing
            </>
          ) : (
            <>
              Analyze
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
