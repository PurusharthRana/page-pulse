const PLACEHOLDER_COUNT = 7

export default function LoadingSkeleton() {
  return (
    <div className="grid animate-fadeUp grid-cols-2 gap-4 sm:grid-cols-3">
      {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-ink-900/[0.06] bg-white p-5 shadow-card"
        >
          <div className="shimmer-bg h-3.5 w-16 rounded-full" />
          <div className="shimmer-bg mt-4 h-6 w-20 rounded-md" />
          <div className="shimmer-bg mt-2 h-3 w-24 rounded-md" />
        </div>
      ))}
    </div>
  )
}
