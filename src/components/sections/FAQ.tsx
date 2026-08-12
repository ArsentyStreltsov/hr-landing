import { useState } from 'react'
import { faqItems } from '../../data/faq'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading title="FAQ" subtitle="Коротко о том, как устроена работа с платформой." />
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.02}>
                <div className="rounded-2xl border border-line bg-white shadow-soft">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-ink">{item.q}</span>
                    <span className="text-accent">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? (
                    <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
