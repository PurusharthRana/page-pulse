export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 py-6">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm text-ink-500">
          Built for Digital Heroes Training Task &middot;{' '}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
          >
            digitalheroesco.com
          </a>
        </p>
      </div>
    </footer>
  )
}
