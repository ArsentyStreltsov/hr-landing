import { brand } from '../../data/brand'
import { navItems } from '../../data/navigation'

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand text-white">
      <div className="container-page section-pad grid gap-8 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{brand.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">{brand.tagline}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page section-pad flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}. Прототип лендинга.</span>
          <span>Тестовое название бренда — легко заменить.</span>
        </div>
      </div>
    </footer>
  )
}
