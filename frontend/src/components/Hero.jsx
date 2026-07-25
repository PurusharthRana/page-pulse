export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center sm:pt-20">
      
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
