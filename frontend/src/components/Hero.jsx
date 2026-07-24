export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center sm:pt-20">
      <div className="mx-auto mb-5 inline-flex animate-fadeUp items-center gap-2 rounded-full border border-accent/15 bg-accent-50 px-3.5 py-1.5 text-xs font-semibold text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Free instant website audit
      </div>

      <h1
        className="animate-fadeUp text-balance font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl"
        style={{ animationDelay: '80ms' }}
      >
        Analyze Any Website
        <br className="hidden sm:block" /> in Seconds
      </h1>

      <p
        className="mx-auto mt-5 max-w-xl animate-fadeUp text-balance text-base leading-relaxed text-ink-500 sm:text-lg"
        style={{ animationDelay: '160ms' }}
      >
        Instantly inspect SEO, metadata, accessibility and performance indicators.
      </p>
    </section>
  )
}
