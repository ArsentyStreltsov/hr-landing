import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cases } from '../../data/cases'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

const accents = ['#FF6B4A', '#2DD4BF', '#7C6CFF', '#F0B429']

export function CasesTeaser() {
  const preview = cases.slice(0, 3)

  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Кейсы"
            title="Примеры проектов на платформе"
            subtitle="HR-ивенты, промо для сотрудников, обучение и внутренние конкурсы — смотрите форматы и механики."
          />
          <Link to="/cases" className="self-start sm:self-auto">
            <Button variant="secondary" className="gap-2">
              Все кейсы
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {preview.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <Link
                to="/cases"
                className="group block h-full overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div
                  className="min-h-[140px] p-5 text-white"
                  style={{
                    background: `linear-gradient(145deg, ${accents[i % accents.length]}, #12201f)`,
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                    {item.client}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-snug">
                    {item.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-ink-soft line-clamp-2">{item.mechanic}</p>
                  <p className="mt-4 text-xs font-semibold text-accent group-hover:underline">
                    Смотреть кейс →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
