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

export function Analytics() {
  const [tab, setTab] = useState<AnalyticsTab>('Обзор')
  const data = analyticsByTab[tab]

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Не «сколько человек пришло», а как сотрудники участвовали"
          subtitle={demoStats.analytics.disclaimer}
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

        <Reveal className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
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

          <div className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft">
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
        </Reveal>
      </div>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-[1.4rem] border border-line bg-white p-5 shadow-soft">
      <p className="text-xs text-muted">{label}</p>
      <div className="mt-2 text-brand">{value}</div>
    </div>
  )
}
