import { useMemo, useState } from 'react'
import { Button } from '../ui/Button'

const questions = [
  {
    q: 'Что важнее для digital HR-события?',
    options: ['Только смотреть эфир', 'Участвовать и получать прогресс', 'Читать регламент'],
    answer: 1,
  },
  {
    q: 'Платформа лучше всего подходит, когда нужно:',
    options: [
      'Собрать 50 человек в зале',
      'Вовлечь сотрудников из разных городов',
      'Напечатать грамоты',
    ],
    answer: 1,
  },
  {
    q: 'Готовые модули помогают:',
    options: [
      'Не разрабатывать стандартные механики с нуля',
      'Заменить HR-отдел',
      'Гарантировать экономию 70%',
    ],
    answer: 0,
  },
]

export function QuizDemo() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const current = questions[index]
  const progress = useMemo(
    () => Math.round(((done ? questions.length : index) / questions.length) * 100),
    [index, done],
  )

  function choose(optionIndex: number) {
    if (selected !== null || done) return
    setSelected(optionIndex)
    if (optionIndex === current.answer) setScore((s) => s + 1)
  }

  function next() {
    if (selected === null) return
    if (index >= questions.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function restart() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setDone(false)
  }

  if (done) {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Демо-квиз</p>
          <h4 className="mt-2 font-display text-2xl font-bold">Готово!</h4>
          <p className="mt-2 text-ink-soft">
            Результат: {score} из {questions.length}. В реальном проекте баллы уходят в профиль и
            командный рейтинг.
          </p>
        </div>
        <Button onClick={restart} className="mt-4 w-full">
          Пройти ещё раз
        </Button>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wider text-accent">Демо-квиз</p>
        <p className="text-xs text-muted">
          {index + 1}/{questions.length}
        </p>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-paper-2">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <h4 className="font-display text-lg font-bold leading-snug">{current.q}</h4>
      <div className="mt-4 flex flex-1 flex-col gap-2">
        {current.options.map((option, i) => {
          const isSelected = selected === i
          const isCorrect = i === current.answer
          const show = selected !== null
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(i)}
              className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                show && isCorrect
                  ? 'border-accent-2 bg-accent-2/15'
                  : show && isSelected
                    ? 'border-accent bg-accent/10'
                    : 'border-line hover:border-brand/30 hover:bg-paper'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
      <Button onClick={next} disabled={selected === null} className="mt-4 w-full">
        {index >= questions.length - 1 ? 'Завершить' : 'Дальше'}
      </Button>
    </div>
  )
}
