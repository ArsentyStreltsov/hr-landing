import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cases, casesDisclaimer } from '../data/cases'
import { useCases } from '../data/useCases'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

const accents = ['#FF6B4A', '#2DD4BF', '#7C6CFF', '#F0B429', '#0B3D3A', '#FF6B4A']

export function CasesPage() {
  return (
  <div className="section-pad py-12 lg:py-16">
    <div className="container-page">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-brand"
      >
        <ArrowLeft size={16} />
        На главную
      </Link>

      <Reveal className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Кейсы</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          Что уже можно делать на платформе
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          HR, sales, обучение и внутренние промо — примеры форматов и механик. Показатели
          демонстрационные до согласования финальных данных.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {cases.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <article className="overflow-hidden rounded-[1.6rem] border border-line bg-white shadow-soft">
              <div
                className="p-6 text-white sm:p-7"
                style={{
                  background: `linear-gradient(145deg, ${accents[i % accents.length]}, #12201f 75%)`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                      {item.client}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold">{item.title}</h2>
                  </div>
                  {item.placeholder ? (
                    <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-bold uppercase">
                      Demo
                    </span>
                  ) : null}
                </div>
              </div>
              <dl className="grid gap-3 p-6 sm:grid-cols-2 sm:p-7">
                <CaseRow label="Задача" value={item.task} />
                <CaseRow label="Аудитория" value={item.audience} />
                <CaseRow label="Механика" value={item.mechanic} />
                <CaseRow label="Игровые элементы" value={item.gameElements} />
                <CaseRow label="Интеграции" value={item.integrations} />
                <CaseRow label="Длительность" value={item.duration} />
                <CaseRow label="Результат" value={item.result} className="sm:col-span-2" />
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <p className="font-display text-2xl font-extrabold text-ink">Форматы и сценарии</p>
        <p className="mt-2 max-w-2xl text-ink-soft">
          То, что раньше было «сеткой сценариев» — здесь как справочник поводов для запуска.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.id}
              className="rounded-[1.3rem] border border-line bg-white p-5 shadow-soft"
              style={{ borderTopColor: item.accent, borderTopWidth: 3 }}
            >
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
              <p className="mt-3 text-xs text-muted">{item.mechanicExample}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="mt-10 text-sm text-muted">{casesDisclaimer}</p>

      <div className="mt-8">
        <Link to="/">
          <Button>Обсудить похожий проект</Button>
        </Link>
      </div>
    </div>
  </div>
  )
}

function CaseRow({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={className}>
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-sm text-ink-soft">{value}</dd>
    </div>
  )
}
