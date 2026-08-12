import { cases, casesDisclaimer } from '../../data/cases'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Cases() {
  return (
    <section id="cases" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Кейсы"
          title="Что уже можно делать на платформе"
          subtitle="Реальные показатели появятся после согласования данных. Сейчас — структура карточек."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="h-full rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    {item.client}
                  </p>
                  {item.placeholder ? (
                    <span className="rounded-md bg-paper-2 px-2 py-1 text-[10px] font-bold uppercase text-muted">
                      Placeholder
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-display text-xl font-extrabold">{item.title}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <Row label="Задача" value={item.task} />
                  <Row label="Аудитория" value={item.audience} />
                  <Row label="Механика" value={item.mechanic} />
                  <Row label="Игровые элементы" value={item.gameElements} />
                  <Row label="Интеграции" value={item.integrations} />
                  <Row label="Длительность" value={item.duration} />
                  <Row label="Результат" value={item.result} />
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{casesDisclaimer}</p>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-ink-soft">{value}</dd>
    </div>
  )
}
