import { useState } from 'react'
import { employeeProfiles } from '../../data/employeeProfiles'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Personalization() {
  const [activeId, setActiveId] = useState(employeeProfiles[0].id)
  const profile = employeeProfiles.find((p) => p.id === activeId) ?? employeeProfiles[0]

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="10 000 сотрудников не обязаны видеть одинаковый контент"
          subtitle="Сценарии зависят от подразделения, города, роли и данных из корпоративных систем."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {employeeProfiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                activeId === p.id
                  ? 'border-brand bg-brand text-white shadow-lift'
                  : 'border-line bg-white hover:shadow-soft'
              }`}
            >
              <p className="font-display text-xl font-bold">{p.name}</p>
              <p className={`mt-1 text-sm ${activeId === p.id ? 'text-white/75' : 'text-muted'}`}>
                {p.role} · {p.city}
              </p>
            </button>
          ))}
        </div>

        <Reveal className="mt-6 rounded-[1.6rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Интерфейс для {profile.name}</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold">Персональная программа</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {profile.focus.map((item) => (
              <div key={item} className="rounded-2xl bg-paper-2 p-4">
                <p className="text-sm font-semibold text-ink">{item}</p>
                <p className="mt-2 text-xs text-muted">Доступно для {profile.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-soft">
            Можно персонализировать задания, команды, контент, расписание, поздравления, игры,
            награды, разделы и коммуникации.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
