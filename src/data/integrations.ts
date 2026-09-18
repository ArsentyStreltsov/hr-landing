export const integrationNodes = [
  { id: 'domain', label: 'Отдельный домен', example: 'Полностью автономный запуск' },
  { id: 'subdomain', label: 'Ваш поддомен', example: 'project.company.ru' },
  { id: 'embed', label: 'Внутренний сервис', example: 'Портал / приложение / webview' },
  { id: 'business', label: 'Бизнес-системы', example: 'CRM / HRIS / LMS / ATS' },
  { id: 'access', label: 'Вход и коммуникации', example: 'SSO / Telegram / email' },
  { id: 'custom', label: 'Любой доступный API', example: 'Собственные сервисы клиента' },
]

export const integrationDisclaimer =
  'Примеры систем с доступными API. Возможность и объём конкретной интеграции определяются после технического анализа.'

export const integrationPrinciple =
  'Проект может жить на отдельном домене, на вашем поддомене или внутри существующего сервиса. Обмен данными настраиваем через API, webhooks и SSO.'

export const integrationHighlight =
  'Если у системы есть технический доступ, проектируем обмен данными под задачу и пользовательский путь.'
