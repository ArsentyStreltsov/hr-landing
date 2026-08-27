import { ArrowUpRight } from 'lucide-react'
import type { PlatformAudience } from '../../../data/platformAudiences'

export function SectionProjectsButton() {
  return (
    <button
      type="button"
      className="inline-flex shrink-0 items-center gap-2 self-start rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-brand shadow-soft transition hover:border-brand/30 hover:bg-paper sm:self-auto"
    >
      Все проекты
      <ArrowUpRight size={16} />
    </button>
  )
}

export function CaseCard({ audience }: { audience: PlatformAudience }) {
  const { caseStudy } = audience

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-soft">
      <div
        className="relative min-h-[180px] overflow-hidden p-5 text-white sm:min-h-[220px]"
        style={{
          background: `linear-gradient(145deg, ${caseStudy.accent} 0%, #12201f 75%)`,
        }}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-24 w-24 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm" />
        <div className="pointer-events-none absolute bottom-10 right-16 h-16 w-28 rounded-xl border border-white/15 bg-white/5" />
        <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
          Кейс · {caseStudy.previewLabel}
        </p>
        <p className="relative mt-3 max-w-[14rem] font-display text-2xl font-extrabold leading-tight">
          {caseStudy.client}
        </p>
        <div className="relative mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            Preview
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            Demo case
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          {caseStudy.client}
        </p>
        <h4 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
          {caseStudy.title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {caseStudy.description}
        </p>
        <p className="mt-auto pt-4 text-xs text-muted">
          Превью кейса. Полные материалы появятся в разделе проектов.
        </p>
      </div>
    </article>
  )
}
