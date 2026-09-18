import { Reveal } from '../ui/Reveal'

const segments = [
  {
    title: 'HR и внутриком',
    description: 'Онбординг, обучение, вовлечение и корпоративные события.',
  },
  {
    title: 'Интерактивные спецпроекты',
    description: 'Игровые промо, челленджи, конкурсы и digital-активации.',
  },
  {
    title: 'Внешняя аудитория',
    description: 'Брендовые кампании, промо продуктов и механики для клиентов.',
  },
  {
    title: 'Отдельные платформы',
    description: 'Закрытые клубы, программы лояльности и реферальные программы.',
  },
]

export function AudienceSegments() {
  return (
    <section className="section-pad pb-8 lg:pb-12">
      <div className="container-page">
        <Reveal className="overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-lift">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment, index) => (
              <article
                key={segment.title}
                className={`p-5 sm:p-6 ${
                  index < segments.length - 1 ? 'border-b border-line sm:border-b-0 sm:border-r' : ''
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-2 font-display text-lg font-extrabold text-ink">
                  {segment.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{segment.description}</p>
              </article>
            ))}
          </div>
          <div className="border-t border-line bg-brand px-5 py-4 text-sm text-white sm:px-6">
            <strong>Также запускаем Telegram-боты с web app:</strong>{' '}
            онлайн- и офлайн-активности, QR-коды, задания и начисление баллов в одном сценарии.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
