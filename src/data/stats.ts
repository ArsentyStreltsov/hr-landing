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
    '12 000 участников',
    '18 регионов',
    'LIVE',
    '+150 баллов',
    'Команда #1',
    'Новый уровень',
    'Интеграция по API',
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

export type AnalyticsTab =
  | 'Внутриком'
  | 'Офлайн-ивент'
  | 'Обучение'
  | 'Внешний спецпроект'
  | 'Мерч-шоп'

export const analyticsTabs: AnalyticsTab[] = [
  'Внутриком',
  'Офлайн-ивент',
  'Обучение',
  'Внешний спецпроект',
  'Мерч-шоп',
]

export const analyticsByTab: Record<
  AnalyticsTab,
  {
    metrics: Array<{ label: string; value: number; suffix?: string; decimals?: number }>
    chart: Array<{ name: string; value: number }>
    chartLabel: string
    color: string
  }
> = {
  Внутриком: {
    color: '#FF6B4A',
    chartLabel: 'Активность по дням',
    metrics: [
      { label: 'Участники', value: 8430 },
      { label: 'Participation rate', value: 74, suffix: '%' },
      { label: 'Игровые сессии', value: 31420 },
      { label: 'Активностей на участника', value: 4.7, decimals: 1 },
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
  'Офлайн-ивент': {
    color: '#2DD4BF',
    chartLabel: 'QR-активности по часам',
    metrics: [
      { label: 'Участники', value: 2840 },
      { label: 'Сканирования QR', value: 12640 },
      { label: 'Пройдено зон', value: 8720 },
      { label: 'Среднее активностей', value: 4.5, decimals: 1 },
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
  Обучение: {
    color: '#7C6CFF',
    chartLabel: 'Прохождение модулей',
    metrics: [
      { label: 'Начали обучение', value: 6120 },
      { label: 'Завершили', value: 71, suffix: '%' },
      { label: 'Средний балл', value: 82, suffix: '%' },
      { label: 'Выполнено заданий', value: 18460 },
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
  'Внешний спецпроект': {
    color: '#0B3D3A',
    chartLabel: 'Целевые действия по каналам',
    metrics: [
      { label: 'Уникальные участники', value: 18430 },
      { label: 'Конверсия в участие', value: 22, suffix: '%' },
      { label: 'Целевые действия', value: 4760 },
      { label: 'Повторные визиты', value: 38, suffix: '%' },
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
  'Мерч-шоп': {
    color: '#F0B429',
    chartLabel: 'Заказы по дням',
    metrics: [
      { label: 'Открыли витрину', value: 5240 },
      { label: 'Оформили заказ', value: 1860 },
      { label: 'Баллов потрачено', value: 428000 },
      { label: 'Товаров в витрине', value: 48 },
    ],
    chart: [
      { name: 'Пн', value: 180 },
      { name: 'Вт', value: 240 },
      { name: 'Ср', value: 310 },
      { name: 'Чт', value: 280 },
      { name: 'Пт', value: 390 },
      { name: 'Сб', value: 250 },
      { name: 'Вс', value: 210 },
    ],
  },
}
