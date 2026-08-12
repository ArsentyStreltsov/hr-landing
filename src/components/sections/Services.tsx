import { processSteps, serviceExtras } from '../../data/platformModules'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="process" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Как запускаем"
          title="От идеи HR-активации до запуска"
          subtitle="Можно подключить только технологическую часть или передать нам весь digital-проект под ключ."
        />

        <Reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step}
              className="rounded-2xl border border-line bg-white p-4 shadow-soft"
            >
              <p className="text-xs font-bold text-accent">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6 rounded-[1.4rem] bg-paper-2 p-5">
          <p className="text-sm font-bold text-ink">Дополнительно можно взять на себя</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {serviceExtras.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
