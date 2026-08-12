import { engagementItems, portalItems } from '../../data/comparison'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function PortalComparison() {
  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading title="Портал хранит информацию. Мы создаём повод туда возвращаться." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-extrabold">Корпоративный портал</h3>
              <ul className="mt-5 space-y-2 text-ink-soft">
                {portalItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-[1.5rem] bg-brand p-6 text-white shadow-lift">
              <h3 className="font-display text-2xl font-extrabold">Engagement platform</h3>
              <ul className="mt-5 space-y-2 text-white/85">
                {engagementItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <p className="mt-5 text-sm text-muted">
          При необходимости платформа может не заменять существующий портал, а работать вместе с ним.
        </p>
      </div>
    </section>
  )
}
