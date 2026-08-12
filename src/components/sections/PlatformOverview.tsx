import { useState } from 'react'
import { platformNav } from '../../data/platformModules'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type NavItem = (typeof platformNav)[number]

export function PlatformOverview() {
  const [active, setActive] = useState<NavItem>('Главная')

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Продукт"
          title="Всё корпоративное событие — внутри одного digital-пространства"
          subtitle="Не одна мини-игра, а полноценная корпоративная digital-среда."
        />

        <Reveal className="mt-10 overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-lift">
          <div className="grid lg:grid-cols-[220px_1fr_240px]">
            <aside className="border-b border-line bg-paper p-4 lg:border-b-0 lg:border-r">
              <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-muted">
                Навигация
              </p>
              <div className="flex gap-2 overflow-x-auto lg:flex-col">
                {platformNav.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActive(item)}
                    className={`whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                      active === item
                        ? 'bg-brand text-white'
                        : 'text-ink-soft hover:bg-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </aside>

            <div className="min-h-[480px] p-5 lg:p-7">
              <PlatformScreen key={active} active={active} />
            </div>

            <aside className="space-y-3 border-t border-line bg-paper p-4 lg:border-l lg:border-t-0">
              <RightPanel active={active} />
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PlatformScreen({ active }: { active: NavItem }) {
  switch (active) {
    case 'Главная':
      return <HomeScreen />
    case 'Программа':
      return <ProgramScreen />
    case 'Игры':
      return <GamesScreen />
    case 'Задания':
      return <TasksScreen />
    case 'LIVE':
      return <LiveScreen />
    case 'Команды':
      return <TeamsScreen />
    case 'Рейтинг':
      return <RankingScreen />
    case 'Награды':
      return <RewardsScreen />
    case 'Мой профиль':
      return <ProfileScreen />
    default:
      return <HomeScreen />
  }
}

function ScreenHeader({
  section,
  title,
  subtitle,
}: {
  section: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-soft p-5 text-white">
      <p className="text-sm text-white/70">Раздел: {section}</p>
      <h3 className="mt-1 font-display text-2xl font-extrabold">{title}</h3>
      {subtitle ? <p className="mt-2 text-white/80">{subtitle}</p> : null}
    </div>
  )
}

function PrimaryButton({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="w-full rounded-2xl bg-accent py-3.5 text-sm font-bold text-white shadow-soft"
    >
      {children}
    </button>
  )
}

function HomeScreen() {
  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Главная"
        title="Привет, Анна из Marketing"
        subtitle="До начала трансляции 01:23:45"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-paper-2 p-4">
          <p className="text-xs text-muted">Текущая активность</p>
          <p className="mt-1 font-bold">Командный challenge дня</p>
        </div>
        <div className="rounded-2xl bg-paper-2 p-4">
          <p className="text-xs text-muted">Командный прогресс</p>
          <div className="mt-2 h-2 rounded-full bg-white">
            <div className="h-full w-2/3 rounded-full bg-accent" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-line p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Ближайшие активности
        </p>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>12:00 — LIVE с руководством</li>
          <li>14:30 — Квиз о ценностях</li>
          <li>16:00 — Photo challenge</li>
        </ul>
      </div>
      <PrimaryButton>Играть</PrimaryButton>
    </div>
  )
}

function ProgramScreen() {
  const days = [
    {
      day: 'День 1',
      items: [
        { time: '10:00', title: 'Открытие фестиваля', type: 'LIVE' },
        { time: '12:30', title: 'Квиз о компании', type: 'Игра' },
        { time: '16:00', title: 'Командное задание', type: 'Challenge' },
      ],
    },
    {
      day: 'День 2',
      items: [
        { time: '11:00', title: 'Wellbeing challenge', type: 'Задание' },
        { time: '14:00', title: 'Photo challenge', type: 'UGC' },
        { time: '18:00', title: 'Финал + розыгрыш', type: 'LIVE' },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Программа"
        title="Расписание digital-события"
        subtitle="Персональная программа для Marketing · Москва"
      />
      {days.map((day) => (
        <div key={day.day} className="rounded-2xl border border-line p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">{day.day}</p>
          <ul className="mt-3 space-y-3">
            {day.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-xl bg-paper-2 px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="text-xs text-muted">{item.time}</p>
                </div>
                <span className="rounded-lg bg-white px-2 py-1 text-[11px] font-bold text-brand">
                  {item.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PrimaryButton>Добавить в календарь</PrimaryButton>
    </div>
  )
}

function GamesScreen() {
  const games = [
    { title: 'Квиз о ценностях', meta: '+80 баллов · 3 мин', status: 'Доступно' },
    { title: 'Колесо фортуны', meta: '1 спин в день', status: 'Доступно' },
    { title: 'Memory бренда', meta: '+50 баллов', status: 'Новое' },
    { title: 'Ловля призов', meta: 'Командный зачёт', status: 'Скоро' },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Игры"
        title="Игровой хаб"
        subtitle="Выберите механику — баллы уходят в профиль и рейтинг команды"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {games.map((game) => (
          <div key={game.title} className="rounded-2xl border border-line bg-paper-2 p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-bold text-ink">{game.title}</p>
              <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                {game.status}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">{game.meta}</p>
            <button
              type="button"
              className="mt-3 rounded-xl bg-brand px-3 py-2 text-xs font-bold text-white"
            >
              Запустить
            </button>
          </div>
        ))}
      </div>
      <PrimaryButton>Открыть все механики</PrimaryButton>
    </div>
  )
}

function TasksScreen() {
  const tasks = [
    { title: 'Познакомиться с 3 коллегами', progress: 66, points: 40 },
    { title: 'Пройти онбординг-квиз', progress: 100, points: 60 },
    { title: 'Загрузить фото команды', progress: 0, points: 30 },
    { title: 'Посмотреть запись эфира', progress: 25, points: 20 },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Задания"
        title="Ваши задания на неделю"
        subtitle="3 из 4 в работе · персональный сценарий Marketing"
      />
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.title} className="rounded-2xl border border-line p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">{task.title}</p>
              <span className="text-xs font-bold text-accent">+{task.points}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-paper-2">
              <div
                className="h-full rounded-full bg-accent-2"
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted">{task.progress}% выполнено</p>
          </div>
        ))}
      </div>
      <PrimaryButton>Взять следующее задание</PrimaryButton>
    </div>
  )
}

function LiveScreen() {
  return (
    <div className="space-y-4">
      <ScreenHeader
        section="LIVE"
        title="Главная сцена онлайн"
        subtitle="Эфир начался · 1 284 зрителя"
      />
      <div className="relative overflow-hidden rounded-2xl bg-ink p-5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,74,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.25),transparent_40%)]" />
        <div className="relative">
          <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-bold">● LIVE</span>
          <p className="mt-4 font-display text-xl font-bold">Встреча с руководством</p>
          <p className="mt-2 text-sm text-white/75">Сейчас: Q&A · следующий блок — live quiz</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['🔥 214', '👏 98', '❤️ 76', '🎉 41'].map((r) => (
              <span key={r} className="rounded-full bg-white/10 px-3 py-1.5 text-xs">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-paper-2 p-4">
          <p className="text-xs text-muted">Вопрос ведущему</p>
          <p className="mt-1 text-sm font-semibold">Отправьте вопрос в чат эфира</p>
        </div>
        <div className="rounded-2xl bg-paper-2 p-4">
          <p className="text-xs text-muted">Live quiz через</p>
          <p className="mt-1 text-sm font-semibold">04:20</p>
        </div>
      </div>
      <PrimaryButton>Присоединиться к эфиру</PrimaryButton>
    </div>
  )
}

function TeamsScreen() {
  const members = [
    { name: 'Анна', role: 'Капитан', points: 2480 },
    { name: 'Игорь', role: 'Участник', points: 1910 },
    { name: 'Мария', role: 'Участник', points: 1740 },
    { name: 'Олег', role: 'Участник', points: 1520 },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Команды"
        title="Команда Marketing"
        subtitle="#2 место · 18 430 баллов · 24 участника"
      />
      <div className="rounded-2xl border border-line p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Цель недели</p>
        <p className="mt-2 text-sm font-semibold">Набрать 20 000 командных баллов</p>
        <div className="mt-3 h-2 rounded-full bg-paper-2">
          <div className="h-full w-[92%] rounded-full bg-accent" />
        </div>
      </div>
      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-xl bg-paper-2 px-3 py-2.5"
          >
            <div>
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-muted">{m.role}</p>
            </div>
            <p className="text-sm font-bold text-brand">{m.points.toLocaleString('ru-RU')}</p>
          </div>
        ))}
      </div>
      <PrimaryButton>Пригласить коллегу</PrimaryButton>
    </div>
  )
}

function RankingScreen() {
  const rows = [
    { place: 1, team: 'Product', points: 22150, delta: '+320' },
    { place: 2, team: 'Marketing', points: 18430, delta: '+210', me: true },
    { place: 3, team: 'Sales', points: 16780, delta: '+180' },
    { place: 4, team: 'Operations', points: 14220, delta: '+90' },
    { place: 5, team: 'HR', points: 12100, delta: '+40' },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Рейтинг"
        title="Командный leaderboard"
        subtitle="Обновляется в реальном времени · демо-данные"
      />
      <div className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.team}
            className={`flex items-center justify-between rounded-xl px-3 py-3 ${
              row.me ? 'bg-brand text-white' : 'bg-paper-2 text-ink'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm font-bold">{row.place}</span>
              <div>
                <p className="text-sm font-semibold">{row.team}</p>
                <p className={`text-xs ${row.me ? 'text-white/70' : 'text-muted'}`}>
                  {row.delta} за час
                </p>
              </div>
            </div>
            <p className="text-sm font-bold">{row.points.toLocaleString('ru-RU')}</p>
          </div>
        ))}
      </div>
      <PrimaryButton>Мой вклад в команду</PrimaryButton>
    </div>
  )
}

function RewardsScreen() {
  const rewards = [
    { title: 'Брендированный мерч', cost: '2 000 баллов', status: 'Доступно' },
    { title: 'День работы из кафе', cost: '3 500 баллов', status: 'Доступно' },
    { title: 'Место на офлайн-ивенте', cost: '5 000 баллов', status: 'Почти' },
    { title: 'Семейный билет', cost: '8 000 баллов', status: 'Закрыто' },
  ]

  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Награды"
        title="Магазин наград"
        subtitle="У вас 2 480 баллов · 12 достижений"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {rewards.map((reward) => (
          <div key={reward.title} className="rounded-2xl border border-line bg-paper-2 p-4">
            <p className="font-bold text-ink">{reward.title}</p>
            <p className="mt-2 text-xs text-muted">{reward.cost}</p>
            <span className="mt-3 inline-block rounded-md bg-white px-2 py-1 text-[10px] font-bold uppercase text-brand">
              {reward.status}
            </span>
          </div>
        ))}
      </div>
      <PrimaryButton>Обменять баллы</PrimaryButton>
    </div>
  )
}

function ProfileScreen() {
  return (
    <div className="space-y-4">
      <ScreenHeader
        section="Мой профиль"
        title="Анна · Marketing"
        subtitle="Москва · команда Marketing · уровень 7"
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ['Баллы', '2 480'],
          ['Достижения', '12'],
          ['Streak', '5 дней'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-paper-2 p-4 text-center">
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-1 font-display text-xl font-extrabold text-brand">{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-line p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Badges</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Первый вход', 'Командный игрок', 'LIVE-гость', 'Квиз-мастер', 'Фотодня'].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-soft"
              >
                {badge}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="rounded-2xl bg-paper-2 p-4">
        <p className="text-xs text-muted">Персональные рекомендации</p>
        <p className="mt-1 text-sm font-semibold">
          Сегодня: пройти Memory и отправить реакцию на LIVE
        </p>
      </div>
      <PrimaryButton>Продолжить сценарий</PrimaryButton>
    </div>
  )
}

function RightPanel({ active }: { active: NavItem }) {
  const feedBySection: Record<NavItem, string[]> = {
    Главная: [
      'Максим получил +50 баллов',
      'Команда Sales обогнала Operations',
      'Новая реакция на эфире: 🔥 ×120',
    ],
    Программа: [
      'Через 40 мин — LIVE с руководством',
      'Добавлено задание Photo challenge',
      'Квиз о ценностях открыт',
    ],
    Игры: [
      'Анна завершила квиз: 3/3',
      'Новая механика: Memory бренда',
      'Колесо фортуны: остался 1 спин',
    ],
    Задания: [
      'Выполнено заданий сегодня: 186',
      'Marketing закрыл 2 задания',
      'Новый онбординг-квест доступен',
    ],
    LIVE: [
      'В эфире 1 284 зрителя',
      'Вопрос в чат от Казани',
      'Live quiz стартует через 4 мин',
    ],
    Команды: [
      'Marketing: +210 за час',
      'Игорь присоединился к команде',
      'До цели недели: 1 570 баллов',
    ],
    Рейтинг: [
      'Product удерживает 1 место',
      'Marketing приближается: −3 720',
      'HR поднялся на 5 место',
    ],
    Награды: [
      'Обменяно наград сегодня: 42',
      'Мерч почти закончился',
      'Анна близка к офлайн-ивенту',
    ],
    'Мой профиль': [
      'Новый badge: LIVE-гость',
      'Streak 5 дней подряд',
      'Рекомендация: Memory бренда',
    ],
  }

  return (
    <>
      <div className="rounded-2xl bg-white p-4 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Рейтинг</p>
        <ol className="mt-3 space-y-2 text-sm">
          <li>1. Product</li>
          <li>2. Marketing</li>
          <li>3. Sales</li>
        </ol>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Достижения</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['🔥', '🏆', '🎯', '📡'].map((b) => (
            <span key={b} className="rounded-xl bg-paper-2 px-2 py-1 text-lg">
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Live feed</p>
        <ul className="mt-3 space-y-2 text-xs text-ink-soft">
          {feedBySection[active].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
