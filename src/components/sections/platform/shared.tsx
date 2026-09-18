import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PlatformAudience } from '../../../data/platformAudiences'

export function SectionProjectsButton() {
  return (
    <Link
      to="/cases"
      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition hover:brightness-105 sm:self-auto"
    >
      Все кейсы
      <ArrowUpRight size={16} />
    </Link>
  )
}

export function CaseCard({
  audience,
  index,
  total,
  onPrev,
  onNext,
}: {
  audience: PlatformAudience
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}) {
  const { caseStudy } = audience

  return (
    <article className="relative overflow-hidden rounded-[1.8rem] text-white shadow-lift">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, rgba(8,18,18,0.94) 0%, rgba(8,18,18,0.72) 42%, ${caseStudy.accent}cc 100%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute -right-10 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]"
          style={{ backgroundColor: caseStudy.accent }}
        />
        <div className="absolute right-8 top-10 h-40 w-40 rounded-full border border-white/20" />
        <div className="absolute bottom-16 right-24 h-28 w-28 rotate-12 rounded-3xl border border-white/15 bg-white/10" />
      </div>

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div className="flex min-w-0 flex-col">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/65">
            Кейс · {caseStudy.previewLabel}
          </p>
          <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
            {caseStudy.client}
          </h3>
          <p className="mt-3 max-w-md font-display text-xl font-bold leading-snug text-white/95 sm:text-2xl">
            {caseStudy.title}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {caseStudy.description}
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/15 pt-6">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-2xl font-extrabold sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/cases"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-105"
          >
            Смотреть кейс
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-end gap-3">
            <span className="text-sm font-semibold text-white/70">
              {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              aria-label="Предыдущий кейс"
              onClick={onPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Следующий кейс"
              onClick={onNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <blockquote className="rounded-[1.4rem] bg-white p-5 text-ink shadow-soft sm:p-6">
            <p className="font-display text-3xl leading-none text-accent">“</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{caseStudy.quote}</p>
            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
              <span
                className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-extrabold text-white"
                style={{ background: caseStudy.accent }}
              >
                {caseStudy.client}
              </span>
              <p className="text-xs font-semibold text-muted">{caseStudy.quoteAuthor}</p>
            </div>
          </blockquote>
        </div>
      </div>
    </article>
  )
}
