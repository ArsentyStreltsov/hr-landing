import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { brand } from '../../data/brand'
import { platformScreens } from '../../data/platformModules'
import { demoStats } from '../../data/stats'
import { useContactModal } from '../../context/ContactModalContext'
import { Button } from '../ui/Button'

export function Hero() {
  const { openModal } = useContactModal()
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setScreen((s) => (s + 1) % platformScreens.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [])

  const active = platformScreens[screen]

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-6 lg:pb-24 lg:pt-10">
      <div className="pointer-events-none absolute inset-0 grain opacity-70" />
      <div className="container-page section-pad relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-sm font-bold uppercase tracking-[0.22em] text-brand"
          >
            {brand.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
          >
            {brand.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {brand.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button variant="accent" onClick={() => openModal('Хочу обсудить HR-проект')}>
              {brand.primaryCta}
            </Button>
            <Button variant="secondary" onClick={() => document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' })}>
              {brand.secondaryCta}
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-6 max-w-lg text-sm text-muted"
          >
            {brand.heroNote}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative min-h-[420px] lg:min-h-[520px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand via-brand-soft to-accent-2/80 shadow-lift" />
          <div className="absolute inset-3 rounded-[1.6rem] bg-white/10 backdrop-blur-sm" />

          <div className="absolute left-1/2 top-1/2 z-20 w-[86%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-paper shadow-lift">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
              <span className="ml-2 text-xs font-semibold text-muted">{active.title}</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="rounded-xl bg-brand p-4 text-white">
                <p className="text-xs uppercase tracking-wider text-white/70">Corporate Digital Event</p>
                <p className="mt-1 font-display text-xl font-bold">Привет, команда!</p>
                <p className="mt-2 text-sm text-white/80">До начала трансляции 01:23:45</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-paper-2 p-3">
                  <p className="text-[11px] text-muted">Текущая активность</p>
                  <p className="mt-1 text-sm font-bold">Командный квиз</p>
                </div>
                <div className="rounded-xl bg-paper-2 p-3">
                  <p className="text-[11px] text-muted">Прогресс</p>
                  <p className="mt-1 text-sm font-bold">68%</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-accent py-3 text-sm font-bold text-white"
              >
                Играть
              </button>
              <p className="text-xs text-muted">{active.description}</p>
            </div>
          </div>

          {[
            { label: 'Leaderboard', className: 'left-2 top-8 rotate-[-6deg]' },
            { label: 'LIVE', className: 'right-2 top-16 rotate-[5deg]' },
            { label: 'Награда', className: 'left-4 bottom-16 rotate-[4deg]' },
            { label: 'Мобильная игра', className: 'right-3 bottom-10 rotate-[-4deg]' },
          ].map((item) => (
            <div
              key={item.label}
              className={`absolute z-10 rounded-2xl bg-white/95 px-3 py-2 text-xs font-bold text-brand shadow-soft ${item.className}`}
            >
              {item.label}
            </div>
          ))}

          {demoStats.heroFloats.slice(0, 6).map((label, i) => (
            <motion.span
              key={label}
              className="absolute z-30 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-ink shadow-soft"
              style={{
                top: `${12 + (i % 3) * 28}%`,
                left: i % 2 === 0 ? '4%' : 'auto',
                right: i % 2 === 1 ? '2%' : 'auto',
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {label}
            </motion.span>
          ))}

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
            {platformScreens.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={s.title}
                onClick={() => setScreen(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === screen ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
