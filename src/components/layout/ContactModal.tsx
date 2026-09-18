import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useContactModal } from '../../context/ContactModalContext'
import { ContactForm } from '../ui/ContactForm'

export function ContactModal() {
  const { open, closeModal, presetMessage } = useContactModal()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeModal])

  if (!open) return null

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
              Расскажите, что хотите запустить
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

        <ContactForm key={presetMessage} presetMessage={presetMessage} onDone={closeModal} />
      </div>
    </div>
  )
}
