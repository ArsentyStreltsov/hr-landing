import { useState } from 'react'
import { Button } from '../ui/Button'

const sectors = [
  { label: '+50 баллов', color: '#FF6B4A' },
  { label: 'Badge', color: '#2DD4BF' },
  { label: 'Ещё спин', color: '#F0B429' },
  { label: '+100', color: '#7C6CFF' },
  { label: 'Задание', color: '#0B3D3A' },
  { label: 'Приз', color: '#FF6B4A' },
]

export function WheelDemo() {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  function spin() {
    if (spinning) return
    setSpinning(true)
    setResult(null)
    const index = Math.floor(Math.random() * sectors.length)
    const sectorAngle = 360 / sectors.length
    const extra = 360 * 4
    const target = extra + (360 - index * sectorAngle - sectorAngle / 2)
    setRotation((r) => r + target)
    setTimeout(() => {
      setResult(sectors[index].label)
      setSpinning(false)
    }, 3200)
  }

  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-white p-4">
      <p className="self-start text-xs font-bold uppercase tracking-wider text-gold">
        Демо-колесо
      </p>
      <div className="relative mt-3">
        <div className="absolute left-1/2 top-[-6px] z-10 -translate-x-1/2 text-accent">▼</div>
        <div
          className="h-44 w-44 rounded-full border-4 border-brand shadow-lift transition-transform duration-[3s] ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(${sectors
              .map((s, i) => {
                const start = (i / sectors.length) * 100
                const end = ((i + 1) / sectors.length) * 100
                return `${s.color} ${start}% ${end}%`
              })
              .join(', ')})`,
          }}
        />
      </div>
      <p className="mt-4 min-h-6 text-center text-sm font-semibold text-ink">
        {result ? `Выпало: ${result}` : 'Крутите колесо — демо-приз'}
      </p>
      <Button onClick={spin} disabled={spinning} className="mt-3 w-full" variant="accent">
        {spinning ? 'Крутим…' : 'Крутить'}
      </Button>
    </div>
  )
}
