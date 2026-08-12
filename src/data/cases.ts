export type CaseItem = {
  id: string
  client: string
  title: string
  task: string
  audience: string
  mechanic: string
  gameElements: string
  integrations: string
  duration: string
  result: string
  placeholder: boolean
}

export const cases: CaseItem[] = [
  {
    id: 'mts-inclusive',
    client: 'МТС',
    title: 'Инклюзивная программа',
    task: 'данные будут добавлены',
    audience: 'XX 000 сотрудников',
    mechanic: 'пример интерфейса / сценария',
    gameElements: 'данные будут добавлены',
    integrations: 'данные будут добавлены',
    duration: 'данные будут добавлены',
    result: 'XX% participation rate',
    placeholder: true,
  },
  {
    id: 'mts-family',
    client: 'МТС',
    title: 'Семейная HR-активация',
    task: 'данные будут добавлены',
    audience: 'XX 000 сотрудников',
    mechanic: 'пример интерфейса / сценария',
    gameElements: 'данные будут добавлены',
    integrations: 'данные будут добавлены',
    duration: 'данные будут добавлены',
    result: 'XX 000 игровых сессий',
    placeholder: true,
  },
  {
    id: 'corp-event',
    client: 'Клиент',
    title: 'Корпоративное digital-событие',
    task: 'данные будут добавлены',
    audience: 'XX 000 сотрудников',
    mechanic: 'демонстрационный сценарий',
    gameElements: 'игры, LIVE, рейтинг',
    integrations: 'SSO / HR-система — по возможности',
    duration: 'данные будут добавлены',
    result: 'XX% participation rate',
    placeholder: true,
  },
  {
    id: 'learning',
    client: 'Клиент',
    title: 'HR-геймификация / обучение',
    task: 'данные будут добавлены',
    audience: 'XX 000 сотрудников',
    mechanic: 'демонстрационный сценарий',
    gameElements: 'квизы, задания, достижения',
    integrations: 'LMS — пример возможной интеграции',
    duration: 'данные будут добавлены',
    result: 'XX 000 игровых сессий',
    placeholder: true,
  },
]

export const casesDisclaimer =
  'Демонстрационные показатели до добавления согласованных данных кейса.'
