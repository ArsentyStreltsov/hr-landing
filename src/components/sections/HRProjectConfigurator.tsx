import { useMemo, useState } from 'react'
import { configuratorOptions } from '../../data/annualActivities'
import { useContactModal } from '../../context/ContactModalContext'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HRProjectConfigurator() {
  const { openModal } = useContactModal()
  const [task, setTask] = useState(configuratorOptions.tasks[0])
  const [size, setSize] = useState(configuratorOptions.sizes[2])
  const [modules, setModules] = useState<string[]>(['игры', 'LIVE', 'команды', 'рейтинг'])
  const [integration, setIntegration] = useState(configuratorOptions.integrations[2])

  function toggleModule(mod: string) {
    setModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod],
    )
  }

  const concept = useMemo(() => {
    const sizeLabel =
      size === 'до 500'
        ? '400'
        : size === '500–2 000'
          ? '1 500'
          : size === '2 000–10 000'
            ? '5 000'
            : '12 000'
    const auth =
      integration === 'нет'
        ? 'входят по приглашению'
        : integration.includes('SSO') || integration === 'несколько систем'
          ? 'входят через SSO'
          : 'входят через корпоративный доступ'
    const teamPart = modules.includes('команды')
      ? 'автоматически распределяются по командам и получают персональную программу'
      : 'получают персональную программу'
    const gamePart = modules.includes('игры')
      ? 'проходят игровые задания и собирают баллы'
      : 'выполняют задания и собирают прогресс'
    const livePart = modules.includes('LIVE')
      ? ' В финале проходит live-трансляция с интерактивным квизом и командным рейтингом.'
      : ''

    return {
      title: `${task[0].toUpperCase()}${task.slice(1)} для ${sizeLabel} сотрудников`,
      body: `Сотрудники ${auth}, ${teamPart}. В течение кампании они ${gamePart}.${livePart}`,
      modules: [
        integration !== 'нет' ? integration.toUpperCase() : null,
        modules.includes('команды') ? 'Команды' : null,
        modules.includes('игры') ? 'Игровые механики' : null,
        modules.includes('LIVE') ? 'LIVE' : null,
        modules.includes('рейтинг') ? 'Leaderboard' : null,
        modules.includes('награды') ? 'Награды' : null,
        modules.includes('задания') ? 'Задания' : null,
        modules.includes('пользовательский контент') ? 'UGC' : null,
      ].filter(Boolean) as string[],
    }
  }, [task, size, modules, integration])

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Главный интерактив"
          title="Соберите пример HR-проекта"
          subtitle="Конфигуратор демонстрационный и не рассчитывает настоящую стоимость."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 rounded-[1.6rem] border border-line bg-white p-5 shadow-soft sm:p-7">
            <Step title="1. Какая задача?">
              <ChipGroup
                options={configuratorOptions.tasks}
                value={task}
                onChange={setTask}
              />
            </Step>
            <Step title="2. Сколько сотрудников?">
              <ChipGroup
                options={configuratorOptions.sizes}
                value={size}
                onChange={setSize}
              />
            </Step>
            <Step title="3. Что добавить?">
              <div className="flex flex-wrap gap-2">
                {configuratorOptions.modules.map((mod) => {
                  const on = modules.includes(mod)
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => toggleModule(mod)}
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                        on ? 'bg-accent text-white' : 'bg-paper-2 text-ink-soft'
                      }`}
                    >
                      {mod}
                    </button>
                  )
                })}
              </div>
            </Step>
            <Step title="4. Нужны интеграции?">
              <ChipGroup
                options={configuratorOptions.integrations}
                value={integration}
                onChange={setIntegration}
              />
            </Step>
          </Reveal>

          <Reveal delay={0.05} className="rounded-[1.6rem] bg-brand p-6 text-white shadow-lift sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-2">
              Пример концепции
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              {concept.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{concept.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {concept.modules.map((m) => (
                <span key={m} className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold">
                  ✓ {m}
                </span>
              ))}
            </div>
            <Button
              variant="accent"
              className="mt-8 w-full"
              onClick={() =>
                openModal(
                  `Хочу обсудить проект: ${concept.title}. Модули: ${concept.modules.join(', ')}.`,
                )
              }
            >
              Обсудить такой проект
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-ink">{title}</p>
      {children}
    </div>
  )
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
            value === option ? 'bg-brand text-white' : 'bg-paper-2 text-ink-soft'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
