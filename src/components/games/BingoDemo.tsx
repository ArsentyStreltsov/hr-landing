import { useState } from 'react'
import { Button } from '../ui/Button'

const cells = [
  'Посмотрел эфир',
  'Ответил в квизе',
  'Заработал badge',
  'Пригласил коллегу',
  'FREE',
  'Сделал задание',
  'Поставил реакцию',
  'Зашёл 2 дня подряд',
  'Попал в топ команды',
]

export function BingoDemo() {
  const [marked, setMarked] = useState<number[]>([4])

  function toggle(i: number) {
    if (i === 4) return
    setMarked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const bingo = lines.some((line) => line.every((i) => marked.includes(i)))

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-brand">Демо Bingo</p>
        {bingo ? <span className="text-xs font-bold text-accent">BINGO!</span> : null}
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {cells.map((cell, i) => {
          const active = marked.includes(i)
          return (
            <button
              key={cell}
              type="button"
              onClick={() => toggle(i)}
              className={`rounded-xl p-2 text-center text-[11px] font-semibold leading-tight transition ${
                active
                  ? 'bg-accent text-white shadow-soft'
                  : 'bg-paper-2 text-ink hover:bg-line'
              }`}
            >
              {cell}
            </button>
          )
        })}
      </div>
      <Button
        variant="secondary"
        className="mt-3 w-full"
        onClick={() => setMarked([4])}
      >
        Сбросить
      </Button>
    </div>
  )
}
