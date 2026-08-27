import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { platformAudiences } from '../../../data/platformAudiences'
import { Reveal } from '../../ui/Reveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { SectionProjectsButton } from './shared'
import { cn } from '../../../lib/cn'

const tileSizes = [
  'text-sm px-4 py-2',
  'text-base px-5 py-2.5',
  'text-lg px-5 py-3',
  'text-sm px-4 py-2',
  'text-base px-5 py-2.5',
  'text-xl px-6 py-3',
  'text-sm px-4 py-2.5',
  'text-base px-5 py-2.5',
]

/** Облако тегов в одном пространстве → один раскрывается в карточку, остальные остаются вокруг */
export function TagCloudVariant() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const active = platformAudiences.find((item) => item.id === activeId) ?? null

  const topTags = active
    ? platformAudiences.filter((_, i) => {
        const activeIndex = platformAudiences.findIndex((a) => a.id === activeId)
        return i < activeIndex
      })
    : []
  const bottomTags = active
    ? platformAudiences.filter((_, i) => {
        const activeIndex = platformAudiences.findIndex((a) => a.id === activeId)
        return i > activeIndex
      })
    : []

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function toggleTag(id: string) {
    setActiveId((current) => (current === id ? null : id))
  }

  function onBackgroundClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!activeId) return
    if (e.target === e.currentTarget) setActiveId(null)
  }

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Продукт"
          title="Всё корпоративное событие — внутри одного digital-пространства"
          subtitle="Нажмите тег — раскроется пример проекта. Нажмите ещё раз или мимо — облако вернётся."
        />
        <SectionProjectsButton />
      </div>

      <Reveal className="mt-10">
        <div
          ref={rootRef}
          onClick={onBackgroundClick}
          className="relative min-h-[320px] py-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            {!active ? (
              <motion.div
                key="cloud"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-3 py-10 sm:gap-4 sm:py-16"
              >
                {platformAudiences.map((item, index) => (
                  <TagPill
                    key={item.id}
                    label={item.title}
                    sizeClass={tileSizes[index % tileSizes.length]}
                    rotate={(index % 5) - 2}
                    onClick={() => toggleTag(item.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center gap-4 py-4 sm:gap-5 sm:py-6"
                onClick={onBackgroundClick}
              >
                {topTags.length > 0 ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    {topTags.map((item, index) => (
                      <TagPill
                        key={item.id}
                        label={item.title}
                        sizeClass={tileSizes[index % tileSizes.length]}
                        onClick={() => toggleTag(item.id)}
                      />
                    ))}
                  </div>
                ) : null}

                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="grid w-full max-w-4xl gap-0 overflow-hidden rounded-[1.6rem] border border-line/80 bg-white/90 shadow-lift backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="relative min-h-[210px] overflow-hidden p-6 text-left text-white sm:min-h-[240px] sm:p-7"
                    style={{
                      background: `linear-gradient(145deg, ${active.caseStudy.accent} 0%, #12201f 78%)`,
                    }}
                    title="Закрыть карточку"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute bottom-5 right-5 h-24 w-24 rounded-2xl border border-white/20 bg-white/10" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                      Пример проекта · {active.caseStudy.previewLabel}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight">
                      {active.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-white/80">
                      {active.caseStudy.title}
                    </p>
                    <p className="mt-6 text-xs text-white/55">Нажмите ещё раз, чтобы свернуть</p>
                  </button>

                  <div className="flex flex-col p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      {active.caseStudy.client}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {active.caseStudy.description}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {active.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-snug text-ink-soft"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>

                {bottomTags.length > 0 ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    {bottomTags.map((item, index) => (
                      <TagPill
                        key={item.id}
                        label={item.title}
                        sizeClass={tileSizes[(index + 3) % tileSizes.length]}
                        onClick={() => toggleTag(item.id)}
                      />
                    ))}
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </>
  )
}

function TagPill({
  label,
  sizeClass,
  rotate = 0,
  onClick,
}: {
  label: string
  sizeClass: string
  rotate?: number
  onClick: () => void
}) {
  return (
    <motion.button
      type="button"
      layout
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      className={cn(
        'rounded-full border border-line/70 bg-white/70 font-semibold text-ink shadow-soft backdrop-blur-[2px] transition hover:border-brand/30 hover:bg-white',
        sizeClass,
      )}
      style={{ rotate: `${rotate}deg` }}
    >
      {label}
    </motion.button>
  )
}
