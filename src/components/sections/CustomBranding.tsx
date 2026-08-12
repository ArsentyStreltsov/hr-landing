import { useState } from 'react'
import { brandingThemes } from '../../data/platformModules'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CustomBranding() {
  const [activeId, setActiveId] = useState(brandingThemes[0].id)
  const theme = brandingThemes.find((t) => t.id === activeId) ?? brandingThemes[0]

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Сотрудник видит ваш проект, а не нашу платформу"
          subtitle="Один и тот же интерфейс — в совершенно разных стилях работодателя."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {brandingThemes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeId === t.id ? 'bg-brand text-white' : 'bg-white text-ink-soft shadow-soft'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-[1.8rem] shadow-lift">
          <div className="p-6 sm:p-8" style={{ background: theme.bg, color: theme.text }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{theme.vibe}</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Digital Event Hub
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Играть', 'LIVE', 'Рейтинг'].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl p-4"
                  style={{ background: theme.card }}
                >
                  <p className="text-sm font-bold">{label}</p>
                  <p className="mt-2 text-xs opacity-70">Брендированный модуль</p>
                  <div
                    className="mt-4 h-2 rounded-full"
                    style={{ background: theme.accent, width: '70%' }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm opacity-80">
              Меняем цвета, типографику, персонажей, game assets, анимацию, терминологию, badges,
              UI игр, домен и tone of voice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
