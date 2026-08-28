import { useState } from 'react'
import { gameMechanics } from '../../data/gameMechanics'
import { GameDemoHost } from '../games/GameDemoHost'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function GameMechanics() {
  const playable = gameMechanics.filter((g) => g.demo)
  const [activeId, setActiveId] = useState(playable[0]?.id ?? gameMechanics[0].id)
  const active = gameMechanics.find((g) => g.id === activeId) ?? gameMechanics[0]

  return (
    <section id="games" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Игровые механики"
          title="Быстрые геймификации — потыкайте демо"
          subtitle="Квизы, колесо, memory и другие механики из предподготовленных шаблонов. Подойдут для HR, sales, обучения и внутренних конкурсов."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {gameMechanics.map((item, index) => {
              const selected = item.id === activeId
              return (
                <Reveal key={item.id} delay={index * 0.015}>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`group h-full w-full rounded-[1.3rem] border p-4 text-left transition ${
                      selected
                        ? 'border-brand bg-brand text-white shadow-lift'
                        : 'border-line bg-white hover:-translate-y-0.5 hover:shadow-soft'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base font-bold">{item.title}</h3>
                      {item.demo ? (
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            selected ? 'bg-white/15 text-white' : 'bg-accent/10 text-accent'
                          }`}
                        >
                          Demo
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={`mt-2 text-sm ${selected ? 'text-white/80' : 'text-ink-soft'}`}
                    >
                      {item.howItWorks}
                    </p>
                    <div className="mt-3 hidden text-xs group-hover:block">
                      <p className={selected ? 'text-accent-2' : 'text-muted'}>
                        Для HR: {item.hrTasks.join(', ')}
                      </p>
                    </div>
                  </button>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div
              className="min-h-[420px] rounded-[1.6rem] p-3 shadow-lift"
              style={{ background: `linear-gradient(160deg, ${active.color}, #0B3D3A)` }}
            >
              <div className="mb-3 px-2 pt-1 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Как работает · {active.title}
                </p>
                <p className="mt-1 text-sm text-white/90">{active.usage}</p>
              </div>
              <div className="h-[360px]">
                <GameDemoHost key={active.id} mechanic={active} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
