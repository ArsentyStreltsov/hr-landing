import type { GameMechanic } from '../../data/gameMechanics'
import { BingoDemo } from './BingoDemo'
import { CatchDemo } from './CatchDemo'
import { ClickerDemo } from './ClickerDemo'
import { MemoryDemo } from './MemoryDemo'
import { QuizDemo } from './QuizDemo'
import { WheelDemo } from './WheelDemo'

export function GameDemoHost({ mechanic }: { mechanic: GameMechanic }) {
  switch (mechanic.demo) {
    case 'quiz':
      return <QuizDemo />
    case 'memory':
      return <MemoryDemo />
    case 'wheel':
      return <WheelDemo />
    case 'clicker':
      return <ClickerDemo />
    case 'catch':
      return <CatchDemo />
    case 'bingo':
      return <BingoDemo />
    default:
      return (
        <div className="flex h-full flex-col justify-center rounded-2xl bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">Пример механики</p>
          <h4 className="mt-2 font-display text-xl font-bold">{mechanic.title}</h4>
          <p className="mt-2 text-sm text-ink-soft">{mechanic.howItWorks}</p>
          <p className="mt-4 text-sm text-muted">
            Интерактивное демо для этой механики можно добавить в следующей итерации. Сейчас доступны
            кликабельные демо: квиз, memory, колесо, кликер, ловля и bingo.
          </p>
        </div>
      )
  }
}
