export type NavItem = {
  id: string
  label: string
  href: string
  external?: boolean
}

export const navItems: NavItem[] = [
  { id: 'platform', label: 'Возможности', href: '/#capabilities' },
  { id: 'games', label: 'Игры', href: '/#games' },
  { id: 'integrations', label: 'Интеграции', href: '/#integrations' },
  { id: 'cases', label: 'Кейсы', href: '/cases' },
  { id: 'faq', label: 'FAQ', href: '/#faq' },
]
