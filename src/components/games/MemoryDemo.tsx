import { useMemo, useState } from 'react'
import { Button } from '../ui/Button'

const icons = ['🎯', '🏆', '🎮', '📡']

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function MemoryDemo() {
  const deck = useMemo(
    () =>
      shuffle(
        [...icons, ...icons].map((icon, i) => ({
          id: i,
          icon,
          key: `${icon}-${i}`,
        })),
      ),
    [],
  )
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<string[]>([])
  const [lock, setLock] = useState(false)
  const [moves, setMoves] = useState(0)

  const done = matched.length === icons.length

  function flip(index: number) {
    if (lock || flipped.includes(index) || matched.includes(deck[index].icon)) return
    const next = [...flipped, index]
    setFlipped(next)
    if (next.length === 2) {
      setMoves((m) => m + 1)
      setLock(true)
      const [a, b] = next
      if (deck[a].icon === deck[b].icon) {
        setMatched((m) => [...m, deck[a].icon])
        setFlipped([])
        setLock(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setLock(false)
        }, 700)
      }
    }
  }

  function restart() {
    setFlipped([])
    setMatched([])
    setMoves(0)
    setLock(false)
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-violet-soft">Демо Memory</p>
        <p className="text-xs text-muted">Ходы: {moves}</p>
      </div>
      {done ? (
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h4 className="font-display text-2xl font-bold">Пары собраны!</h4>
            <p className="mt-2 text-sm text-ink-soft">
              В HR-проекте карточки брендируются под ценности, продукты или команды.
            </p>
          </div>
          <Button onClick={restart} className="mt-4 w-full">
            Сыграть снова
          </Button>
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-4 gap-2">
          {deck.map((card, index) => {
            const open = flipped.includes(index) || matched.includes(card.icon)
            return (
              <button
                key={card.key}
                type="button"
                onClick={() => flip(index)}
                className={`aspect-square rounded-xl text-xl transition ${
                  open
                    ? 'bg-brand text-white shadow-soft'
                    : 'bg-paper-2 text-transparent hover:bg-line'
                }`}
              >
                {open ? card.icon : '?'}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
