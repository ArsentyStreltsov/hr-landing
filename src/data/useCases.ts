export type UseCase = {
  id: string
  title: string
  description: string
  mechanicExample: string
  accent: string
}

export const useCases: UseCase[] = [
  {
    id: 'holidays',
    title: 'Корпоративные праздники',
    description: 'Новый год, день компании, профессиональные праздники и внутренние фестивали.',
    mechanicExample:
      'Недельный digital-фестиваль: ежедневные задания, командный рейтинг и финальная LIVE-трансляция с розыгрышем.',
    accent: '#FF6B4A',
  },
  {
    id: 'onboarding',
    title: 'Онбординг',
    description: 'Игровое знакомство с компанией, культурой, продуктами и командой.',
    mechanicExample:
      'Персональный квест новичка: знакомство с подразделениями, квиз о ценностях и награда за первую неделю.',
    accent: '#2DD4BF',
  },
  {
    id: 'learning',
    title: 'Обучение',
    description: 'Квизы, задания, игровые курсы, соревнования между командами.',
    mechanicExample:
      'Серия микро-квизов с прогрессом по отделам и возвратом результатов в LMS.',
    accent: '#F0B429',
  },
  {
    id: 'engagement',
    title: 'Employee Engagement',
    description: 'Регулярные активности, challenges, рейтинги и достижения.',
    mechanicExample:
      'Месячный challenge с ежедневными заданиями, streak и командным соревнованием городов.',
    accent: '#7C6CFF',
  },
  {
    id: 'employer-brand',
    title: 'Employer Brand',
    description: 'Проекты для сотрудников и кандидатов, которые транслируют культуру компании.',
    mechanicExample:
      'Истории сотрудников, photo challenge и публичный рейтинг ценностей бренда.',
    accent: '#0B3D3A',
  },
  {
    id: 'referral',
    title: 'Реферальные программы',
    description: 'Игровая механика вокруг рекомендаций кандидатов и найма.',
    mechanicExample:
      'Сотрудник рекомендует кандидата → статусы из ATS начисляют баллы → при найме открывается награда.',
    accent: '#FF6B4A',
  },
  {
    id: 'teams',
    title: 'Командные соревнования',
    description: 'Подразделения, города или команды соревнуются друг с другом.',
    mechanicExample:
      'Офисы набирают очки за задания недели; live leaderboard обновляется в реальном времени.',
    accent: '#2DD4BF',
  },
  {
    id: 'recognition',
    title: 'Программы признания',
    description: 'Номинации, благодарности, достижения и награды.',
    mechanicExample:
      'Коллеги выдвигают номинации, сообщество голосует, победители получают badges и призы.',
    accent: '#F0B429',
  },
  {
    id: 'inclusive',
    title: 'Инклюзивные проекты',
    description: 'Механики, позволяющие вовлекать разные группы сотрудников.',
    mechanicExample:
      'Доступные форматы участия, адаптивные задания и сценарии без обязательного live-присутствия.',
    accent: '#7C6CFF',
  },
  {
    id: 'family',
    title: 'Семейные проекты',
    description: 'Активности для детей и семей сотрудников.',
    mechanicExample:
      'Детский digital-квест с простыми мини-играми и семейным рейтингом достижений.',
    accent: '#FF6B4A',
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing',
    description: 'Челленджи, спортивные активности, полезные привычки.',
    mechanicExample:
      '21-дневный wellbeing challenge: шаги, привычки, командный прогресс и награды.',
    accent: '#2DD4BF',
  },
  {
    id: 'broadcasts',
    title: 'Корпоративные трансляции',
    description: 'Прямые эфиры с дополнительными интерактивами.',
    mechanicExample:
      'Эфир + реакции, вопросы ведущему, live-квиз и мгновенный рейтинг команд.',
    accent: '#0B3D3A',
  },
]
