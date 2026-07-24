import {
  Radio,
  Timer,
  Heading,
  FileText,
  Hash,
  ImageOff,
  Type,
  CheckCircle2,
} from 'lucide-react'

function StatusPill({ status }) {
  const ok = status >= 200 && status < 300
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
        ok ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
      }`}
    >
      {ok && <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />}
      {status}
    </span>
  )
}

function Card({ icon: Icon, label, value, valueClassName = '', delay = 0, badge }) {
  return (
    <div
      className="group animate-fadeUp rounded-2xl border border-ink-900/[0.06] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-softHover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-ink-500">
          <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
          <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
        </div>
        {badge}
      </div>
      <p className={`mt-3 truncate font-display text-2xl font-bold text-ink-900 ${valueClassName}`}>
        {value}
      </p>
    </div>
  )
}

export default function ResultCards({ data }) {
  const {
    httpStatus,
    responseTime,
    title,
    metaDescription,
    h1Count,
    missingAltImages,
    wordCount,
  } = data

  const altIssue = missingAltImages > 0

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <Card
        icon={Radio}
        label="HTTP Status"
        value={httpStatus}
        delay={0}
        badge={<StatusPill status={httpStatus} />}
      />
      <Card
        icon={Timer}
        label="Response Time"
        value={`${responseTime} ms`}
        delay={40}
      />
      <Card
        icon={Hash}
        label="H1 Count"
        value={h1Count}
        delay={80}
      />
      <Card
        icon={ImageOff}
        label="Missing Alt Text"
        value={missingAltImages}
        valueClassName={altIssue ? 'text-amber-600' : 'text-emerald-600'}
        delay={120}
        badge={
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              altIssue ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
            }`}
          >
            {altIssue ? 'Fix' : 'Good'}
          </span>
        }
      />
      <Card
        icon={Type}
        label="Word Count"
        value={wordCount.toLocaleString()}
        delay={160}
      />
      <Card
        icon={Heading}
        label="Page Title"
        value={title}
        valueClassName="text-lg"
        delay={200}
      />
      <div
        className="group col-span-2 animate-fadeUp rounded-2xl border border-ink-900/[0.06] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-softHover sm:col-span-3"
        style={{ animationDelay: '240ms' }}
      >
        <div className="flex items-center gap-1.5 text-ink-500">
          <FileText className="h-3.5 w-3.5" strokeWidth={2.25} />
          <span className="text-xs font-medium uppercase tracking-wide">Meta Description</span>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{metaDescription}</p>
      </div>
    </div>
  )
}
