import { Activity } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-900/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-sm shadow-accent/30">
            <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-bold tracking-tight text-ink-900">
              Page Pulse
            </p>
            <p className="text-xs font-medium text-ink-500">Website Audit Tool</p>
          </div>
        </div>
      </div>
    </header>
  )
}
