import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { journeySteps } from '../../data/platformModules'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'

const CARD_WIDTH = 280
const GAP = 16

export function EmployeeJourney() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  function updateEdges() {
    const el = trackRef.current
    if (!el) return
    const max = Math.max(el.scrollWidth - el.clientWidth, 0)
    setCanLeft(el.scrollLeft > 8)
    setCanRight(el.scrollLeft < max - 8)
    const nextIndex = Math.round(el.scrollLeft / (CARD_WIDTH + GAP))
    setIndex(Math.min(Math.max(nextIndex, 0), journeySteps.length - 1))
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  function scrollByCards(dir: -1 | 1) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (CARD_WIDTH + GAP), behavior: 'smooth' })
  }

  function goTo(i: number) {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: i * (CARD_WIDTH + GAP), behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page section-pad">
        <SectionHeading
          title="Сотрудник просто заходит — платформа уже знает, что ему показать"
          subtitle="От приглашения до возвращения — персональный путь внутри кампании."
        />

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Предыдущий шаг"
            disabled={!canLeft}
            onClick={() => scrollByCards(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand shadow-soft transition enabled:hover:bg-paper disabled:opacity-35"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Следующий шаг"
            disabled={!canRight}
            onClick={() => scrollByCards(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand shadow-soft transition enabled:hover:bg-paper disabled:opacity-35"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <Reveal className="relative mt-4">
        {/* Fade только когда есть контент за краем — не перекрывает первую/последнюю карточку */}
        {canLeft ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 lg:w-28"
            style={{
              background:
                'linear-gradient(90deg, color-mix(in srgb, var(--color-paper) 95%, transparent), transparent)',
            }}
          />
        ) : null}
        {canRight ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 lg:w-28"
            style={{
              background:
                'linear-gradient(270deg, color-mix(in srgb, var(--color-paper) 95%, transparent), transparent)',
            }}
          />
        ) : null}

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-[max(1rem,calc((100%-80rem)/2+1rem))] pb-6 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {journeySteps.map((step, i) => (
            <article
              key={step.title}
              className={cn(
                'w-[min(280px,78vw)] shrink-0 snap-start rounded-[1.4rem] border border-line bg-white p-5 shadow-soft transition duration-300',
                i === index ? 'shadow-lift' : 'opacity-95',
              )}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug">{step.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {step.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-paper-2 px-2 py-1 text-xs font-medium text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-1.5">
          {journeySteps.map((step, i) => (
            <button
              key={step.title}
              type="button"
              aria-label={`Шаг ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-6 bg-brand' : 'w-2 bg-line hover:bg-muted',
              )}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
