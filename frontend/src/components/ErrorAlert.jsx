import { AlertTriangle } from 'lucide-react'

export default function ErrorAlert({ message }) {
  return (
    <div
      role="alert"
      className="animate-fadeUp flex items-start gap-3 rounded-2xl bg-red-50 ring-1 ring-red-200 px-5 py-4 shadow-card"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
        strokeWidth={2.25}
      />

      <div>
        <p className="text-sm font-semibold text-red-600">
          Audit Failed
        </p>

        <p className="mt-0.5 text-sm text-ink-700/80">
          {message}
        </p>
      </div>
    </div>
  )
}