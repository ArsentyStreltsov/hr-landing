/** Демонстрационные цифры — легко заменить подтверждёнными значениями */
export const demoStats = {
  offlineAudience: 300,
  platformAudience: 10000,
  offlineAudienceLabel: '≈ 300 участников',
  platformAudienceLabel: 'Вся компания',
  platformAudienceExample: '10 000+',
  // Стоимости пока не заполнены — не показывать как факты
  offlineEventBudget: null as number | null,
  platformBudget: null as number | null,
  showBudgetPhrase: false,
  budgetPhrase:
    'Платформа для всей компании — за бюджет одного большого корпоративного мероприятия',
  heroFloats: [
    '12 000 сотрудников',
    '18 регионов',
    'LIVE',
    '+150 баллов',
    'Команда #1',
    'Новый уровень',
    'Интеграция с HR',
    'SSO',
  ],
  analytics: {
    participants: 8430,
    participationRate: 74,
    gameSessions: 31420,
    activitiesPerEmployee: 4.7,
    liveViews: 6120,
    reactions: 48200,
    disclaimer: 'Демонстрационные показатели. Не являются результатами реального проекта.',
  },
}

export type AnalyticsTab = 'Обзор' | 'Игры' | 'LIVE' | 'Регионы'

export const analyticsTabs: AnalyticsTab[] = ['Обзор', 'Игры', 'LIVE', 'Регионы']

export const analyticsByTab: Record<
  AnalyticsTab,
  {
    metrics: Array<{ label: string; value: number; suffix?: string; decimals?: number }>
    chart: Array<{ name: string; value: number }>
    chartLabel: string
    color: string
  }
> = {
  Обзор: {
    color: '#FF6B4A',
    chartLabel: 'Активность по дням',
    metrics: [
      { label: 'Участники', value: 8430 },
      { label: 'Participation rate', value: 74, suffix: '%' },
      { label: 'Игровые сессии', value: 31420 },
      { label: 'Активностей на сотрудника', value: 4.7, decimals: 1 },
    ],
    chart: [
      { name: 'Пн', value: 420 },
      { name: 'Вт', value: 510 },
      { name: 'Ср', value: 640 },
      { name: 'Чт', value: 590 },
      { name: 'Пт', value: 720 },
      { name: 'Сб', value: 380 },
      { name: 'Вс', value: 300 },
    ],
  },
  Игры: {
    color: '#2DD4BF',
    chartLabel: 'Игровые сессии по дням',
    metrics: [
      { label: 'Игроки', value: 6210 },
      { label: 'Completion rate', value: 68, suffix: '%' },
      { label: 'Игровые сессии', value: 31420 },
      { label: 'Среднее время, мин', value: 6.4, decimals: 1 },
    ],
    chart: [
      { name: 'Пн', value: 2800 },
      { name: 'Вт', value: 3400 },
      { name: 'Ср', value: 4100 },
      { name: 'Чт', value: 3900 },
      { name: 'Пт', value: 5200 },
      { name: 'Сб', value: 6100 },
      { name: 'Вс', value: 5920 },
    ],
  },
  LIVE: {
    color: '#7C6CFF',
    chartLabel: 'Зрители и реакции по дням',
    metrics: [
      { label: 'Просмотры LIVE', value: 6120 },
      { label: 'Досмотр эфира', value: 61, suffix: '%' },
      { label: 'Реакции', value: 48200 },
      { label: 'Вопросов ведущему', value: 864 },
    ],
    chart: [
      { name: 'Пн', value: 980 },
      { name: 'Вт', value: 1120 },
      { name: 'Ср', value: 1540 },
      { name: 'Чт', value: 1280 },
      { name: 'Пт', value: 1860 },
      { name: 'Сб', value: 720 },
      { name: 'Вс', value: 540 },
    ],
  },
  Регионы: {
    color: '#0B3D3A',
    chartLabel: 'Активность по регионам',
    metrics: [
      { label: 'Регионов онлайн', value: 18 },
      { label: 'Топ-регион share', value: 22, suffix: '%' },
      { label: 'Городов в рейтинге', value: 47 },
      { label: 'Средний participation', value: 71, suffix: '%' },
    ],
    chart: [
      { name: 'МСК', value: 2100 },
      { name: 'СПБ', value: 1480 },
      { name: 'КЗН', value: 920 },
      { name: 'ЕКБ', value: 870 },
      { name: 'НСК', value: 760 },
      { name: 'РНД', value: 640 },
      { name: 'др.', value: 1660 },
    ],
  },
}
