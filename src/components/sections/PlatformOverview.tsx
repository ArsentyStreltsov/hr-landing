import { useEffect, useState } from 'react'
import { AudiencesVariant } from './platform/AudiencesVariant'
import { SpotlightVariant } from './platform/SpotlightVariant'
import { TagCloudVariant } from './platform/TagCloudVariant'

const STORAGE_KEY = 'hr-promo-platform-layout'

const layouts = [
  { id: 'a', label: 'a', title: 'Аудитории + кейс' },
  { id: 'b', label: 'b', title: 'Облако тегов' },
  { id: 'c', label: 'c', title: 'Spotlight-кейс' },
] as const

type LayoutId = (typeof layouts)[number]['id']

function isLayoutId(value: string | null): value is LayoutId {
  return layouts.some((item) => item.id === value)
}

export function PlatformOverview() {
  const [layout, setLayout] = useState<LayoutId>('a')

  useEffect(() => {
    const saved = window.sessionStorage.getItem(STORAGE_KEY)
    // Старые b/d больше не существуют — сбрасываем на a
    if (isLayoutId(saved)) setLayout(saved)
    else if (saved) window.sessionStorage.setItem(STORAGE_KEY, 'a')
  }, [])

  function choose(id: LayoutId) {
    setLayout(id)
    window.sessionStorage.setItem(STORAGE_KEY, id)
  }

  return (
    <section id="capabilities" className="section-pad relative py-16 lg:py-24">
      <div className="container-page">
        {layout === 'a' ? <AudiencesVariant /> : null}
        {layout === 'b' ? <TagCloudVariant /> : null}
        {layout === 'c' ? <SpotlightVariant /> : null}

        <div className="mt-6 flex justify-end">
          <div
            className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-muted/45"
            title="Служебный переключатель вариантов блока"
          >
            <span className="select-none">v</span>
            {layouts.map((item) => (
              <button
                key={item.id}
                type="button"
                title={item.title}
                aria-label={`Вариант блока: ${item.title}`}
                aria-pressed={layout === item.id}
                onClick={() => choose(item.id)}
                className={`min-w-[14px] rounded px-0.5 py-0.5 transition ${
                  layout === item.id
                    ? 'text-muted/80 underline decoration-muted/40 underline-offset-2'
                    : 'hover:text-muted/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
