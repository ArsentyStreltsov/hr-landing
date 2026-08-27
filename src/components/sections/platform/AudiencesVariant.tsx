import { useState } from 'react'
import { platformAudiences } from '../../../data/platformAudiences'
import { Reveal } from '../../ui/Reveal'
import { CaseCard, SectionProjectsButton } from './shared'
import { SectionHeading } from '../../ui/SectionHeading'

/** Вариант A: для кого → буллиты → кейс */
export function AudiencesVariant() {
  const [activeId, setActiveId] = useState(platformAudiences[0].id)
  const active =
    platformAudiences.find((item) => item.id === activeId) ?? platformAudiences[0]

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Продукт"
          title="Всё корпоративное событие — внутри одного digital-пространства"
          subtitle="Не одна мини-игра, а полноценная корпоративная digital-среда под разные задачи."
        />
        <SectionProjectsButton />
      </div>

      <Reveal className="mt-10 overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-lift">
        <div className="grid lg:grid-cols-[240px_280px_1fr]">
          <aside className="border-b border-line bg-paper p-4 lg:border-b-0 lg:border-r">
            <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-muted">
              Для кого
            </p>
            <div className="flex gap-2 overflow-x-auto lg:flex-col">
              {platformAudiences.map((item) => {
                const selected = item.id === activeId
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                      selected
                        ? 'bg-brand text-white'
                        : 'text-ink-soft hover:bg-white'
                    }`}
                  >
                    {item.title}
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="border-b border-line p-5 lg:border-b-0 lg:border-r lg:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">Что даёт</p>
            <h3 className="mt-2 font-display text-xl font-extrabold text-ink">{active.title}</h3>
            <ul className="mt-5 space-y-3">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-snug text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-5 lg:p-6">
            <CaseCard key={active.id} audience={active} />
          </div>
        </div>
      </Reveal>
    </>
  )
}
