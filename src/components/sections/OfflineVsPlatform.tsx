import { motion } from 'framer-motion'
import { offlineItems, platformItems } from '../../data/comparison'
import { demoStats } from '../../data/stats'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function OfflineVsPlatform() {
  return (
    <section id="capabilities" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Экономика масштаба"
          title="За бюджет одного корпоратива можно вовлечь всю компанию"
          subtitle="Не утверждаем конкретную экономию без подтверждения. Сравниваем логику охвата."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <motion.div
              whileInView={{ x: [ -12, 0 ], opacity: [0.6, 1] }}
              viewport={{ once: true }}
              className="h-full rounded-[1.75rem] border border-line bg-white p-6 shadow-soft lg:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Подход A</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold">Один офлайн-ивент</h3>
              <ul className="mt-6 space-y-3">
                {offlineItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-soft">
                    <span className="h-2 w-2 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-paper-2 p-4">
                <p className="text-sm text-muted">Охват</p>
                <p className="mt-1 font-display text-3xl font-extrabold text-ink">
                  ≈ <AnimatedCounter value={demoStats.offlineAudience} /> участников
                </p>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div
              whileInView={{ x: [12, 0], opacity: [0.6, 1] }}
              viewport={{ once: true }}
              className="relative h-full overflow-hidden rounded-[1.75rem] bg-brand p-6 text-white shadow-lift lg:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">Подход B</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold">Digital-платформа</h3>
              <ul className="mt-6 space-y-3">
                {platformItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-white/70">Охват</p>
                <p className="mt-1 font-display text-3xl font-extrabold">
                  <AnimatedCounter value={demoStats.platformAudience} suffix="+" /> сотрудников
                </p>
                <p className="mt-1 text-sm text-white/70">{demoStats.platformAudienceLabel}</p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-[1.5rem] border border-line bg-white/80 p-5 text-center sm:p-6">
          <p className="font-display text-xl font-bold text-ink sm:text-2xl">
            Вместо одного события для части сотрудников компания получает digital-пространство,
            которое можно использовать снова и снова.
          </p>
          {demoStats.showBudgetPhrase ? (
            <p className="mt-3 text-sm text-accent">{demoStats.budgetPhrase}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
