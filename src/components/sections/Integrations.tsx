import { useState } from 'react'
import {
  integrationDisclaimer,
  integrationNodes,
  integrationPrinciple,
  integrationScenarios,
} from '../../data/integrations'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Integrations() {
  const [active, setActive] = useState(integrationNodes[0].id)
  const [scenarioId, setScenarioId] = useState(integrationScenarios[0].id)
  const node = integrationNodes.find((n) => n.id === active) ?? integrationNodes[0]
  const scenario =
    integrationScenarios.find((s) => s.id === scenarioId) ?? integrationScenarios[0]

  return (
    <section id="integrations" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Интеграции"
          title="Платформа может стать частью существующей HR-инфраструктуры"
          subtitle={integrationPrinciple}
        />

        <Reveal className="relative mt-10 overflow-hidden rounded-[2rem] bg-brand p-6 text-white shadow-lift lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/30 blur-3xl" />
          </div>
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="rounded-2xl bg-white px-5 py-4 text-center text-brand shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Центр</p>
              <p className="font-display text-xl font-extrabold">HR Engagement Platform</p>
            </div>
            <div className="mt-8 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {integrationNodes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    active === item.id
                      ? 'border-accent bg-accent text-white'
                      : 'border-white/15 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <p className="font-semibold">{item.label}</p>
                  <p className={`mt-1 text-xs ${active === item.id ? 'text-white/80' : 'text-white/60'}`}>
                    {item.example}
                  </p>
                </button>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-center text-sm text-white/75">
              Выбрано: {node.label}. Пример возможного сценария интеграции — не готовая коробка.
            </p>
            <p className="mt-2 max-w-2xl text-center text-xs text-white/55">{integrationDisclaimer}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {integrationScenarios.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setScenarioId(s.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                  scenarioId === s.id ? 'bg-brand text-white' : 'bg-white text-ink-soft shadow-soft'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <Reveal className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Пример возможного сценария интеграции
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold">{scenario.title}</h3>
            <ol className="mt-6 space-y-3">
              {scenario.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-2 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-paper-2 p-4 text-sm text-ink-soft">
              HR SYSTEM → API / Webhook → OUR PLATFORM → Employee profile / Activity / Reward →
              Analytics / Result
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
