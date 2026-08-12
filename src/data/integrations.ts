export const integrationNodes = [
  { id: 'ats', label: 'ATS', example: 'Huntflow' },
  { id: 'hris', label: 'HRIS', example: 'SAP SuccessFactors' },
  { id: 'lms', label: 'LMS', example: 'Корпоративный LMS' },
  { id: 'portal', label: 'Корпоративный портал', example: 'Intranet' },
  { id: 'sso', label: 'SSO', example: 'Корпоративная авторизация' },
  { id: 'teams', label: 'Teams / коммуникации', example: 'Microsoft 365' },
  { id: 'bi', label: 'BI', example: 'Аналитика клиента' },
  { id: 'crm', label: 'CRM', example: 'При необходимости' },
  { id: 'custom', label: 'Собственные системы', example: 'API клиента' },
]

export const integrationScenarios = [
  {
    id: 'hire',
    title: 'Сотрудник принят на работу',
    steps: [
      'HR-система передаёт событие',
      'Автоматически создаётся профиль',
      'Запускается onboarding-квест',
    ],
  },
  {
    id: 'referral',
    title: 'Реферальная программа',
    steps: [
      'Сотрудник рекомендует кандидата',
      'Кандидат проходит этап',
      'Сотруднику начисляются баллы',
      'При найме открывается награда',
    ],
  },
  {
    id: 'competition',
    title: 'HR-соревнование',
    steps: [
      'Из ATS поступают данные о результатах',
      'Формируется рейтинг',
      'Сотрудники получают achievements',
    ],
  },
  {
    id: 'learning',
    title: 'Обучение',
    steps: [
      'Сотрудник проходит игровой модуль',
      'Результат возвращается в LMS / HR-систему',
    ],
  },
  {
    id: 'personalization',
    title: 'Персонализация',
    steps: [
      'HR-система передаёт подразделение, город, роль, дату выхода, команду',
      'Платформа показывает разные сценарии',
    ],
  },
]

export const integrationDisclaimer =
  'Примеры систем с доступными API. Возможность и объём конкретной интеграции определяются после технического анализа.'

export const integrationPrinciple =
  'Можем интегрировать платформу с корпоративными системами при наличии технической возможности со стороны системы клиента.'
