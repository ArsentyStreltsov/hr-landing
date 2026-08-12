import { useState } from 'react'
import { useCases } from '../../data/useCases'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function UseCases() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = useCases.find((u) => u.id === activeId) ?? null

  return (
    <section id="scenarios" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Сценарии"
          title="Одна платформа — разные задачи HR"
          subtitle="Не один корпоратив. Десятки HR-поводов в течение года."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => {
            const open = activeId === item.id
            return (
              <Reveal key={item.id} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() => setActiveId(open ? null : item.id)}
                  className="group h-full w-full rounded-[1.4rem] border border-line bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                  style={{ borderTopColor: item.accent, borderTopWidth: 3 }}
                >
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                    {open ? 'Скрыть пример' : 'Пример механики'}
                  </p>
                  {open ? (
                    <p className="mt-2 rounded-xl bg-paper-2 p-3 text-sm text-ink">{item.mechanicExample}</p>
                  ) : null}
                </button>
              </Reveal>
            )
          })}
        </div>

        {active ? (
          <p className="mt-4 text-center text-sm text-muted">
            Выбрано: {active.title}. В реальном проекте собираем сценарий под задачу компании.
          </p>
        ) : null}
      </div>
    </section>
  )
}
