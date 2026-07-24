import { AlertTriangle, WifiOff, ServerCrash } from 'lucide-react'

const ERROR_CONTENT = {
  INVALID_URL: {
    icon: AlertTriangle,
    title: 'That URL doesn\u2019t look right',
    message: 'Enter a full web address including https://, like https://example.com.',
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    ring: 'ring-amber-600/10',
  },
  TIMEOUT: {
    icon: WifiOff,
    title: 'The request timed out',
    message: 'The site took too long to respond. Check the URL and try again.',
    accent: 'text-orange-600',
    bg: 'bg-orange-50',
    ring: 'ring-orange-600/10',
  },
  SERVER_ERROR: {
    icon: ServerCrash,
    title: 'Something went wrong on our end',
    message: 'The audit couldn\u2019t be completed right now. Please try again shortly.',
    accent: 'text-rose-600',
    bg: 'bg-rose-50',
    ring: 'ring-rose-600/10',
  },
}

export default function ErrorAlert({ code }) {
  const content = ERROR_CONTENT[code] || ERROR_CONTENT.SERVER_ERROR
  const Icon = content.icon

  return (
    <div
      role="alert"
      className={`animate-fadeUp flex items-start gap-3 rounded-2xl ${content.bg} ring-1 ${content.ring} px-5 py-4 shadow-card`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${content.accent}`} strokeWidth={2.25} />
      <div>
        <p className={`text-sm font-semibold ${content.accent}`}>{content.title}</p>
        <p className="mt-0.5 text-sm text-ink-700/80">{content.message}</p>
      </div>
    </div>
  )
}
