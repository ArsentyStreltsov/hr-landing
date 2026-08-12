import { useState } from 'react'
import { employeeProfiles, leaderboard } from '../../data/employeeProfiles'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function GamificationSystem() {
  const [activeId, setActiveId] = useState(employeeProfiles[0].id)
  const profile = employeeProfiles.find((p) => p.id === activeId) ?? employeeProfiles[0]

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Добавляем соревнование там, где оно действительно помогает вовлечению"
          subtitle="Индивидуальные баллы, командные рейтинги, badges и streak — как слой мотивации."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {employeeProfiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeId === p.id
                  ? 'bg-brand text-white'
                  : 'bg-white text-ink-soft shadow-soft hover:text-brand'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <Reveal className="mt-6 grid gap-4 lg:grid-cols-3">
          <div
            className="rounded-[1.5rem] p-5 text-white shadow-lift"
            style={{ background: `linear-gradient(145deg, ${profile.accent}, #0B3D3A)` }}
          >
            <p className="text-xs uppercase tracking-wider text-white/70">Профиль</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold">{profile.name}</h3>
            <p className="mt-1 text-white/80">
              {profile.role} · {profile.city}
            </p>
            <p className="mt-6 font-display text-4xl font-extrabold">
              {profile.points.toLocaleString('ru-RU')}
            </p>
            <p className="text-sm text-white/75">баллов · {profile.achievements} достижений</p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Команда</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold">{profile.team}</h3>
            <p className="mt-4 text-4xl font-extrabold text-accent">#{profile.teamRank}</p>
            <p className="mt-1 text-ink-soft">
              {profile.teamPoints.toLocaleString('ru-RU')} баллов
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Leaderboard</p>
            <ol className="mt-4 space-y-3">
              {leaderboard.map((row) => (
                <li
                  key={row.team}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                    row.team === profile.team ? 'bg-brand text-white' : 'bg-paper-2'
                  }`}
                >
                  <span>
                    {row.place}. {row.team}
                  </span>
                  <span className="font-semibold">{row.points.toLocaleString('ru-RU')}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
