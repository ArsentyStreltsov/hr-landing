import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brand } from '../../data/brand'
import { navItems } from '../../data/navigation'
import { useContactModal } from '../../context/ContactModalContext'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

export function Header() {
  const { openModal } = useContactModal()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-paper/90 shadow-soft backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="container-page section-pad flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-brand">
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand/5 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            onClick={() => openModal('Хочу обсудить проект')}
          >
            Обсудить проект
          </Button>
          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-brand lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="container-page section-pad flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="mt-2"
              onClick={() => {
                setOpen(false)
                openModal('Хочу обсудить проект')
              }}
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
