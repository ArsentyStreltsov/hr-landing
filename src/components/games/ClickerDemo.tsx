import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button'

const DURATION = 10

export function ClickerDemo() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    timer.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setRunning(false)
          setFinished(true)
          if (timer.current) window.clearInterval(timer.current)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [running])

  function start() {
    setScore(0)
    setTimeLeft(DURATION)
    setFinished(false)
    setRunning(true)
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-2">Демо-кликер</p>
        <p className="text-xs text-muted">{timeLeft}с</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="font-display text-4xl font-bold text-brand">{score}</p>
        <p className="mt-1 text-sm text-muted">очков</p>
        {running ? (
          <button
            type="button"
            onClick={() => setScore((s) => s + 1)}
            className="mt-6 h-28 w-28 rounded-full bg-accent text-lg font-bold text-white shadow-lift transition active:scale-95"
          >
            Тап!
          </button>
        ) : (
          <Button onClick={start} className="mt-6" variant="accent">
            {finished ? 'Ещё раз' : 'Старт 10 секунд'}
          </Button>
        )}
        {finished ? (
          <p className="mt-4 text-center text-sm text-ink-soft">
            Результат можно отправить в командный рейтинг подразделения.
          </p>
        ) : null}
      </div>
    </div>
  )
}
