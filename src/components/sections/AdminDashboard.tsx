import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const metrics = [
  ['Зарегистрированные', '8 430'],
  ['DAU', '3 120'],
  ['Игровые сессии', '31 420'],
  ['Задания', '12 880'],
  ['Баллы выдано', '842k'],
  ['Просмотры LIVE', '6 120'],
]

export function AdminDashboard() {
  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Всё, что происходит на платформе — в одной админке"
          subtitle="Состав панели и уровень доступа определяются под конкретный проект."
        />

        <Reveal className="mt-10 overflow-hidden rounded-[1.7rem] border border-line bg-white shadow-lift">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <p className="font-display text-lg font-bold">Admin · пример интерфейса</p>
            <span className="rounded-full bg-paper-2 px-3 py-1 text-xs font-semibold text-muted">
              Demo data
            </span>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-paper-2 p-4">
                <p className="text-xs text-muted">{label}</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-brand">{value}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 border-t border-line p-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-brand p-5 text-white">
              <p className="text-sm text-white/70">Активность по дням</p>
              <div className="mt-4 flex h-28 items-end gap-2">
                {[40, 55, 48, 70, 62, 80, 74].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-accent-2/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-paper-2 p-5">
              <p className="text-sm font-semibold text-ink">Управление</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>Контент и новости</li>
                <li>Создание заданий</li>
                <li>Запуск активностей</li>
                <li>Управление наградами</li>
                <li>Выгрузка результатов</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <p className="mt-4 text-sm text-muted">
          Управлять платформой может команда агентства, клиент или обе стороны.
        </p>
      </div>
    </section>
  )
}
