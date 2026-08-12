import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const reactions = ['🔥', '👏', '❤️', '😮', '🎉']

export function LiveExperience() {
  const [counts, setCounts] = useState<Record<string, number>>({
    '🔥': 120,
    '👏': 86,
    '❤️': 64,
    '😮': 22,
    '🎉': 41,
  })
  const [floats, setFloats] = useState<Array<{ id: number; emoji: string }>>([])

  function react(emoji: string) {
    setCounts((c) => ({ ...c, [emoji]: (c[emoji] ?? 0) + 1 }))
    const id = Date.now() + Math.random()
    setFloats((f) => [...f, { id, emoji }])
    window.setTimeout(() => {
      setFloats((f) => f.filter((x) => x.id !== id))
    }, 900)
  }

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Превращаем трансляцию из просмотра в событие"
          subtitle="Платформа может быть digital-обвязкой вокруг онлайн- или гибридного мероприятия."
        />

        <Reveal className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[1.7rem] bg-ink shadow-lift">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,74,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.3),transparent_35%)]" />
            <div className="relative flex min-h-[320px] flex-col justify-between p-6 text-white">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-accent px-2 py-1 text-xs font-bold">LIVE</span>
                <span className="text-sm text-white/70">Корпоративный эфир · сцена 1</span>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">Главная сцена</p>
                <p className="mt-2 max-w-md text-white/75">
                  Пример интерфейса: видео, реакции, квиз и рейтинг рядом с эфиром.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {reactions.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => react(emoji)}
                    className="rounded-full bg-white/10 px-3 py-2 text-sm backdrop-blur transition hover:bg-white/20"
                  >
                    {emoji} {counts[emoji]}
                  </button>
                ))}
                {floats.map((f) => (
                  <span
                    key={f.id}
                    className="pointer-events-none absolute bottom-12 animate-bounce text-2xl"
                    style={{ left: `${20 + Math.random() * 60}%` }}
                  >
                    {f.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              'Чат и вопрос ведущему',
              'Голосование / prediction',
              'Live quiz',
              'Live leaderboard',
              'Задания во время эфира',
              'Розыгрыш и баллы',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
