import { useState } from 'react'
import { brand } from '../../data/brand'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Form = {
  name: string
  company: string
  contact: string
  employees: string
  goal: string
  integrations: string
  comment: string
}

const initial: Form = {
  name: '',
  company: '',
  contact: '',
  employees: '',
  goal: '',
  integrations: '',
  comment: '',
}

export function FinalCTA() {
  const [form, setForm] = useState<Form>(initial)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [success, setSuccess] = useState(false)

  function update<K extends keyof Form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const next: Partial<Form> = {}
    if (!form.name.trim()) next.name = 'Обязательное поле'
    if (!form.company.trim()) next.company = 'Обязательное поле'
    if (!form.contact.trim()) next.contact = 'Обязательное поле'
    if (!form.goal.trim()) next.goal = 'Обязательное поле'
    setErrors(next)
    if (Object.keys(next).length) return
    setSuccess(true)
  }

  return (
    <section id="contact" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          title="Что вы хотите сделать для сотрудников?"
          subtitle="Расскажите задачу — корпоративное событие, онбординг, обучение, конкурс или другой HR-проект. Предложим сценарий, игровые механики и технологическое решение."
        />

        <Reveal className="mx-auto mt-10 max-w-2xl rounded-[1.7rem] border border-line bg-white p-5 shadow-lift sm:p-8">
          {success ? (
            <div className="text-center">
              <p className="font-display text-2xl font-extrabold text-brand">Спасибо!</p>
              <p className="mt-3 text-ink-soft">{brand.formSuccess}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ['name', 'Имя'],
                  ['company', 'Компания'],
                  ['contact', 'Контакт'],
                  ['employees', 'Количество сотрудников'],
                ] as const
              ).map(([key, label]) => (
                <label key={key} className="grid gap-1 text-sm">
                  <span className="font-medium text-ink-soft">{label}</span>
                  <input
                    value={form[key]}
                    onChange={(e) => update(key, e.target.value)}
                    className="rounded-xl border border-line px-3 py-2.5 outline-none ring-accent focus:ring-2"
                  />
                  {errors[key] ? <span className="text-xs text-accent">{errors[key]}</span> : null}
                </label>
              ))}
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="font-medium text-ink-soft">Что хотите сделать?</span>
                <input
                  value={form.goal}
                  onChange={(e) => update('goal', e.target.value)}
                  className="rounded-xl border border-line px-3 py-2.5 outline-none ring-accent focus:ring-2"
                />
                {errors.goal ? <span className="text-xs text-accent">{errors.goal}</span> : null}
              </label>
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="font-medium text-ink-soft">Нужны ли интеграции?</span>
                <input
                  value={form.integrations}
                  onChange={(e) => update('integrations', e.target.value)}
                  className="rounded-xl border border-line px-3 py-2.5 outline-none ring-accent focus:ring-2"
                />
              </label>
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="font-medium text-ink-soft">Комментарий</span>
                <textarea
                  value={form.comment}
                  onChange={(e) => update('comment', e.target.value)}
                  rows={3}
                  className="rounded-xl border border-line px-3 py-2.5 outline-none ring-accent focus:ring-2"
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" variant="accent" className="w-full">
                  {brand.finalCta}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
