import { useState } from 'react'
import { brand } from '../../data/brand'
import { Button } from './Button'

const projectTypes = [
  'Офлайн-мероприятие',
  'Внутренние коммуникации',
  'Обучение или онбординг',
  'Программа лояльности',
  'Отдельная платформа',
  'Спецпроект',
  'Другое',
]

type FormState = {
  name: string
  contact: string
  projectType: string
  description: string
}

export function ContactForm({
  presetMessage = '',
  onDone,
}: {
  presetMessage?: string
  onDone?: () => void
}) {
  const [form, setForm] = useState<FormState>({
    name: '',
    contact: '',
    projectType: projectTypes[0],
    description: presetMessage,
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [success, setSuccess] = useState(false)

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Укажите, как к вам обращаться'
    if (!form.contact.trim()) next.contact = 'Оставьте почту или телефон'
    if (!form.description.trim()) next.description = 'Коротко опишите задачу'
    setErrors(next)
    if (Object.keys(next).length) return
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-paper-2 p-6 text-center">
        <p className="font-display text-2xl font-extrabold text-brand">Спасибо!</p>
        <p className="mt-2 text-sm text-ink-soft">{brand.formSuccess}</p>
        {onDone ? (
          <Button className="mt-5" onClick={onDone}>
            Закрыть
          </Button>
        ) : null}
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <Field label="Как к вам обращаться" error={errors.name}>
        <input
          value={form.name}
          onChange={(event) => update('name', event.target.value)}
          autoComplete="name"
          className="form-control"
        />
      </Field>
      <Field label="Почта или телефон" error={errors.contact}>
        <input
          value={form.contact}
          onChange={(event) => update('contact', event.target.value)}
          autoComplete="email"
          placeholder="name@company.ru или +7"
          className="form-control"
        />
      </Field>
      <Field label="Тип проекта">
        <select
          value={form.projectType}
          onChange={(event) => update('projectType', event.target.value)}
          className="form-control"
        >
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </Field>
      <Field label="Опишите задачу" error={errors.description}>
        <textarea
          value={form.description}
          onChange={(event) => update('description', event.target.value)}
          rows={4}
          placeholder="Что хотите запустить, для кого и к какому сроку?"
          className="form-control resize-y"
        />
      </Field>
      <Button type="submit" variant="accent" className="w-full">
        {brand.finalCta}
      </Button>
      <p className="text-xs text-muted">
        Нажимая кнопку, вы соглашаетесь на обработку данных для связи по задаче.
      </p>
    </form>
  )
}

function Field({
  label,
  error,
  className = '',
  children,
}: {
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`grid gap-1.5 text-sm ${className}`}>
      <span className="font-medium text-ink-soft">{label}</span>
      {children}
      {error ? <span className="text-xs text-accent">{error}</span> : null}
    </label>
  )
}
