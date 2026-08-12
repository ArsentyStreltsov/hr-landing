import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand } from '../../data/brand'
import { useContactModal } from '../../context/ContactModalContext'
import { Button } from '../ui/Button'

type FormState = {
  name: string
  company: string
  contact: string
  employees: string
  goal: string
  integrations: string
  comment: string
}

const initial: FormState = {
  name: '',
  company: '',
  contact: '',
  employees: '',
  goal: '',
  integrations: '',
  comment: '',
}

export function ContactModal() {
  const { open, closeModal, presetMessage } = useContactModal()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!open) return
    setSuccess(false)
    setErrors({})
    setForm((f) => ({ ...f, comment: presetMessage || f.comment }))
  }, [open, presetMessage])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeModal])

  if (!open) return null

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate() {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Укажите имя'
    if (!form.company.trim()) next.company = 'Укажите компанию'
    if (!form.contact.trim()) next.contact = 'Укажите контакт'
    if (!form.goal.trim()) next.goal = 'Расскажите, что хотите сделать'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        aria-label="Закрыть"
        onClick={closeModal}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-paper p-5 shadow-lift sm:rounded-3xl sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Задача</p>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-ink">
              Расскажите, что хотите сделать для сотрудников
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-xl p-2 text-muted hover:bg-white"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>

        {success ? (
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="font-display text-xl font-bold text-brand">Готово</p>
            <p className="mt-2 text-ink-soft">{brand.formSuccess}</p>
            <Button className="mt-5" onClick={closeModal}>
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            {(
              [
                ['name', 'Имя'],
                ['company', 'Компания'],
                ['contact', 'Контакт'],
                ['employees', 'Количество сотрудников'],
                ['goal', 'Что хотите сделать?'],
                ['integrations', 'Нужны ли интеграции?'],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="grid gap-1 text-sm">
                <span className="font-medium text-ink-soft">{label}</span>
                <input
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                  className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-accent focus:ring-2"
                />
                {errors[key] ? <span className="text-xs text-accent">{errors[key]}</span> : null}
              </label>
            ))}
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-ink-soft">Комментарий</span>
              <textarea
                value={form.comment}
                onChange={(e) => update('comment', e.target.value)}
                rows={3}
                className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-accent focus:ring-2"
              />
            </label>
            <Button type="submit" variant="accent" className="mt-2">
              {brand.finalCta}
            </Button>
            <p className="text-xs text-muted">
              Прототип: данные никуда не отправляются. Только валидация и success-state.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
