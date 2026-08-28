import { useState } from 'react'
import { brand } from '../../data/brand'
import {
  integrationDisclaimer,
  integrationHighlight,
  integrationNodes,
  integrationPrinciple,
} from '../../data/integrations'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Integrations() {
  const [active, setActive] = useState(integrationNodes[0].id)
  const node = integrationNodes.find((n) => n.id === active) ?? integrationNodes[0]

  return (
    <section id="integrations" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Интеграции"
          title="Подключаемся к вашей инфраструктуре — куда технически можно"
          subtitle={integrationPrinciple}
        />

        <Reveal className="relative mt-10 overflow-hidden rounded-[2rem] bg-brand p-6 text-white shadow-lift lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/30 blur-3xl" />
          </div>
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="rounded-2xl bg-white px-5 py-4 text-center text-brand shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Центр</p>
              <p className="font-display text-xl font-extrabold">Engagement Platform</p>
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
                  <p
                    className={`mt-1 text-xs ${active === item.id ? 'text-white/80' : 'text-white/60'}`}
                  >
                    {item.example}
                  </p>
                </button>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-center text-sm text-white/80">
              {integrationHighlight} Сейчас выбрано: <strong>{node.label}</strong>.
            </p>
            <p className="mt-2 max-w-2xl text-center text-xs text-white/55">{integrationDisclaimer}</p>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-sm text-ink-soft">{brand.integrationNote}</p>
        <p className="mt-2 text-center text-sm text-muted">{brand.personalizationNote}</p>
      </div>
    </section>
  )
}
