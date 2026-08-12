import { useState } from 'react'
import { annualActivities } from '../../data/annualActivities'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function YearRoundPlatform() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Не обязательно заканчивать платформу вместе с мероприятием"
          subtitle="Один раз созданная технологическая среда может становиться основой для новых HR-активаций."
        />

        <Reveal className="mt-10">
          <div className="flex gap-3 overflow-x-auto pb-3">
            {annualActivities.map((item, i) => (
              <button
                key={item.month}
                type="button"
                onClick={() => setActive(i)}
                className={`min-w-[140px] rounded-2xl border px-4 py-4 text-left transition ${
                  active === i
                    ? 'border-brand bg-brand text-white shadow-lift'
                    : 'border-line bg-white hover:shadow-soft'
                }`}
              >
                <p className="text-xs font-bold tracking-wider opacity-70">{item.month}</p>
                <p className="mt-2 font-display text-base font-bold">{item.title}</p>
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-[1.4rem] border border-line bg-white p-5 shadow-soft">
            <p className="font-display text-xl font-bold">
              {annualActivities[active].month}: {annualActivities[active].title}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Новые кампании, механики и доработки оцениваются отдельно, но повторно создавать всю
              технологическую инфраструктуру не требуется.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
