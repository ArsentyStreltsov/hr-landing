import { useState } from 'react'
import { platformAudiences } from '../../../data/platformAudiences'
import { Reveal } from '../../ui/Reveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { CaseCard, SectionProjectsButton } from './shared'

/** Вариант C: крупный кейс слева, чипы аудиторий и буллиты справа */
export function SpotlightVariant() {
  const [activeId, setActiveId] = useState(platformAudiences[1].id)
  const active =
    platformAudiences.find((item) => item.id === activeId) ?? platformAudiences[1]

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Продукт"
          title="Всё корпоративное событие — внутри одного digital-пространства"
          subtitle="Сначала повод — потом механика и кейс, который уже делали в похожем формате."
        />
        <SectionProjectsButton />
      </div>

      <Reveal className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <CaseCard key={active.id} audience={active} />

        <div className="rounded-[1.8rem] border border-line bg-white p-5 shadow-lift sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">Форматы</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {platformAudiences.map((item) => {
              const selected = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    selected
                      ? 'bg-brand text-white'
                      : 'bg-paper-2 text-ink-soft hover:bg-line'
                  }`}
                >
                  {item.title}
                </button>
              )
            })}
          </div>

          <h3 className="mt-7 font-display text-2xl font-extrabold text-ink">{active.title}</h3>
          <ul className="mt-5 space-y-3">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-snug text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  )
}
