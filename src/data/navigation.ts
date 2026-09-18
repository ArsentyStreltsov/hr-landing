export type NavItem = {
  id: string
  label: string
  href: string
  external?: boolean
}

export const navItems: NavItem[] = [
  { id: 'platform', label: 'Что делаем', href: '/#capabilities' },
  { id: 'games', label: 'Механики', href: '/#games' },
  { id: 'cases', label: 'Кейсы', href: '/cases' },
  { id: 'integrations', label: 'Интеграции', href: '/#integrations' },
  { id: 'faq', label: 'FAQ', href: '/#faq' },
]
