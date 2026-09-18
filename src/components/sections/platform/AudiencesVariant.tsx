import { useState } from 'react'
import { platformAudiences } from '../../../data/platformAudiences'
import { Reveal } from '../../ui/Reveal'
import { CaseCard, SectionProjectsButton } from './shared'
import { SectionHeading } from '../../ui/SectionHeading'

export function AudiencesVariant() {
  const [activeId, setActiveId] = useState(platformAudiences[0].id)
  const activeIndex = platformAudiences.findIndex((item) => item.id === activeId)
  const safeIndex = activeIndex >= 0 ? activeIndex : 0
  const active = platformAudiences[safeIndex]

  function go(delta: number) {
    const next =
      (safeIndex + delta + platformAudiences.length) % platformAudiences.length
    setActiveId(platformAudiences[next].id)
  }

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Что мы можем сделать"
          title="От одной механики до отдельной платформы"
          subtitle="Выберите тип проекта — покажем, что он даёт участникам и как может выглядеть решение."
        />
        <SectionProjectsButton />
      </div>

      <Reveal className="mt-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">Для кого</p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {platformAudiences.map((item) => {
            const selected = item.id === activeId
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  selected
                    ? 'bg-ink text-white shadow-soft'
                    : 'bg-white text-ink-soft shadow-soft hover:bg-paper-2'
                }`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.35fr]" delay={0.04}>
        <aside className="rounded-[1.8rem] border border-line bg-white p-6 shadow-soft sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Что даёт</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {active.title}
          </h3>
          <ul className="mt-6 space-y-4">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-snug text-ink-soft sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </aside>

        <CaseCard
          key={active.id}
          audience={active}
          index={safeIndex}
          total={platformAudiences.length}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      </Reveal>
    </>
  )
}
