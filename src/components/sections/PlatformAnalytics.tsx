import { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  analyticsByTab,
  analyticsTabs,
  demoStats,
  type AnalyticsTab,
} from '../../data/stats'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const adminMetrics = [
  { label: 'Зарегистрированные', value: 8430 },
  { label: 'Активные сегодня', value: 3120 },
  { label: 'Игровые сессии', value: 31420 },
  { label: 'Выполнено заданий', value: 12880 },
]

export function PlatformAnalytics() {
  const [tab, setTab] = useState<AnalyticsTab>('Обзор')
  const data = analyticsByTab[tab]

  return (
    <section id="analytics" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Аналитика и админка"
          title="Не «сколько человек пришло», а как участники вовлекались"
          subtitle={`${demoStats.analytics.disclaimer} Состав панели определяется под проект — управлять может агентство, клиент или обе стороны.`}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {analyticsTabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                tab === t ? 'bg-brand text-white' : 'bg-white text-ink-soft shadow-soft'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-[1.7rem] border border-line bg-white shadow-lift">
          <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {data.metrics.map((metric) => (
                <Metric
                  key={`${tab}-${metric.label}`}
                  label={metric.label}
                  value={
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals ?? 0}
                      className="font-display text-3xl font-extrabold"
                    />
                  }
                />
              ))}
            </div>

            <div className="rounded-[1.4rem] border border-line bg-paper p-4">
              <p className="mb-3 text-sm font-semibold text-ink">
                {tab}: {data.chartLabel}
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.chart}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d5e3de" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill={data.color} radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="border-t border-line bg-paper p-5 lg:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-display text-lg font-bold text-ink">Admin · пример панели</p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted">
                Demo data
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {adminMetrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-xs text-muted">{m.label}</p>
                  <p className="mt-1 font-display text-2xl font-extrabold text-brand">
                    <AnimatedCounter value={m.value} className="font-display text-2xl font-extrabold" />
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
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
              <div className="rounded-2xl bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold text-ink">Управление в одном месте</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  <li>Контент, задания и активности</li>
                  <li>Награды и рейтинги</li>
                  <li>Просмотры LIVE и реакции</li>
                  <li>Активность по командам и регионам</li>
                  <li>Выгрузка результатов</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-[1.4rem] border border-line bg-paper p-5 shadow-soft">
      <p className="text-xs text-muted">{label}</p>
      <div className="mt-2 text-brand">{value}</div>
    </div>
  )
}
