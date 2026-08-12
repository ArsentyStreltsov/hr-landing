import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button'

type Item = { id: number; x: number; y: number; good: boolean }

export function CatchDemo() {
  const [items, setItems] = useState<Item[]>([])
  const [score, setScore] = useState(0)
  const [running, setRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const idRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const spawn = window.setInterval(() => {
      idRef.current += 1
      setItems((prev) => [
        ...prev.slice(-8),
        {
          id: idRef.current,
          x: Math.random() * 80 + 5,
          y: 0,
          good: Math.random() > 0.3,
        },
      ])
    }, 500)
    const fall = window.setInterval(() => {
      setItems((prev) =>
        prev
          .map((item) => ({ ...item, y: item.y + 8 }))
          .filter((item) => item.y < 100),
      )
    }, 120)
    const clock = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setRunning(false)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      window.clearInterval(spawn)
      window.clearInterval(fall)
      window.clearInterval(clock)
    }
  }, [running])

  function start() {
    setScore(0)
    setItems([])
    setTimeLeft(15)
    setRunning(true)
  }

  function catchItem(item: Item) {
    setScore((s) => s + (item.good ? 10 : -5))
    setItems((prev) => prev.filter((i) => i.id !== item.id))
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-accent">Демо: ловля</p>
        <p className="text-xs text-muted">
          {score} очков · {timeLeft}с
        </p>
      </div>
      <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-brand to-brand-soft">
        {!running && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-brand/40 p-4 text-center text-white backdrop-blur-[1px]">
            <p className="text-sm">Лови ★, избегай ✕</p>
            <Button onClick={start} variant="accent" className="mt-3">
              {timeLeft === 0 ? 'Ещё раз' : 'Играть'}
            </Button>
          </div>
        )}
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => catchItem(item)}
            className="absolute -translate-x-1/2 text-xl transition hover:scale-110"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            {item.good ? '★' : '✕'}
          </button>
        ))}
      </div>
    </div>
  )
}
