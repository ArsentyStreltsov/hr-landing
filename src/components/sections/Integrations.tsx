import {
  AppWindow,
  Briefcase,
  Code2,
  Globe2,
  KeyRound,
  Link2,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import {
  integrationDisclaimer,
  integrationNodes,
  integrationPrinciple,
} from '../../data/integrations'
import { Reveal } from '../ui/Reveal'

const nodeIcons: Record<string, LucideIcon> = {
  domain: Globe2,
  subdomain: Link2,
  embed: AppWindow,
  business: Briefcase,
  access: KeyRound,
  custom: Code2,
}

/** Card anchor points as % of the diagram; lines aim at card centers */
const orbitLayout = [
  { left: '5%', top: '2%', lineX: 160, lineY: 55 },
  { left: '68%', top: '2%', lineX: 840, lineY: 55 },
  { left: '76%', top: '38%', lineX: 890, lineY: 190 },
  { left: '68%', top: '72%', lineX: 840, lineY: 325 },
  { left: '5%', top: '72%', lineX: 160, lineY: 325 },
  { left: '0%', top: '38%', lineX: 110, lineY: 190 },
]

export function Integrations() {
  const [active, setActive] = useState(integrationNodes[0].id)
  const node = integrationNodes.find((n) => n.id === active) ?? integrationNodes[0]

  return (
    <section id="integrations" className="section-pad py-12 lg:py-16">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#07162b] px-5 py-8 text-white shadow-lift sm:px-8 sm:py-10 lg:px-10 lg:py-11">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#2f7cff]/25 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#4cc9f0]/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-48 w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.18),transparent_60%)]" />
            <svg
              className="absolute inset-0 h-full w-full opacity-35"
              viewBox="0 0 1200 700"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M-40 420 C 180 220, 320 560, 520 380 S 860 180, 1240 360"
                fill="none"
                stroke="url(#integration-wave)"
                strokeWidth="28"
                opacity="0.35"
              />
              <defs>
                <linearGradient id="integration-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0" />
                  <stop offset="40%" stopColor="#4f8cff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7eb6ff]">
              Интеграции
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Подключаемся к <span className="text-[#5aa2ff]">любым API</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
              {integrationPrinciple}
            </p>
          </div>

          <div className="relative mt-7 lg:hidden">
            <div className="mx-auto mb-4 w-fit rounded-2xl bg-white px-5 py-4 text-center text-[#0b1f3a] shadow-[0_0_40px_rgba(90,162,255,0.35)]">
              <p className="inline-flex rounded-full bg-[#e8f1ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2f6fdb]">
                Центр
              </p>
              <p className="mt-1.5 font-display text-lg font-extrabold">Deep Platform</p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {integrationNodes.map((item) => (
                <NodeCard
                  key={item.id}
                  item={item}
                  active={active === item.id}
                  onSelect={() => setActive(item.id)}
                />
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-8 hidden h-[380px] max-w-5xl lg:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 380"
              aria-hidden
            >
              <circle
                cx="500"
                cy="190"
                r="125"
                fill="none"
                stroke="rgba(122,180,255,0.22)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />
              {orbitLayout.map((pos, i) => {
                const item = integrationNodes[i]
                if (!item) return null
                const isActive = active === item.id
                return (
                  <line
                    key={item.id}
                    x1={500}
                    y1={190}
                    x2={pos.lineX}
                    y2={pos.lineY}
                    stroke={
                      isActive ? 'rgba(90,162,255,0.9)' : 'rgba(122,180,255,0.35)'
                    }
                    strokeWidth={isActive ? 2 : 1.25}
                  />
                )
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-20 w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-5 py-4 text-center text-[#0b1f3a] shadow-[0_0_50px_rgba(90,162,255,0.45)]">
              <p className="inline-flex rounded-full bg-[#e8f1ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2f6fdb]">
                Центр
              </p>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">
                Deep Platform
              </p>
            </div>

            {integrationNodes.map((item, i) => {
              const pos = orbitLayout[i]
              if (!pos) return null
              return (
                <div
                  key={item.id}
                  className="absolute z-10 w-[210px]"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <NodeCard
                    item={item}
                    active={active === item.id}
                    onSelect={() => setActive(item.id)}
                  />
                </div>
              )
            })}
          </div>

          <p className="relative mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-white/50">
            Выбрано: <strong className="text-white/80">{node.label}</strong>
            {' · '}
            {integrationDisclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function NodeCard({
  item,
  active,
  onSelect,
}: {
  item: (typeof integrationNodes)[number]
  active: boolean
  onSelect: () => void
}) {
  const Icon = nodeIcons[item.id] ?? Code2

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-start gap-2.5 rounded-2xl border px-3 py-2.5 text-left backdrop-blur-sm transition ${
        active
          ? 'border-[#5aa2ff] bg-[#12325a]/90 shadow-[0_0_24px_rgba(90,162,255,0.35)]'
          : 'border-white/15 bg-[#0c213f]/75 hover:border-white/30 hover:bg-[#12325a]/70'
      }`}
    >
      <span
        className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          active ? 'bg-[#5aa2ff] text-white' : 'bg-[#1a3a66] text-[#8ec0ff]'
        }`}
      >
        <Icon size={14} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-white">{item.label}</span>
        <span className="mt-0.5 block text-[11px] leading-snug text-white/55">{item.example}</span>
      </span>
    </button>
  )
}
