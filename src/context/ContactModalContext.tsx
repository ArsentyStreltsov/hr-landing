import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type ContactModalContextValue = {
  open: boolean
  presetMessage: string
  openModal: (presetMessage?: string) => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [presetMessage, setPresetMessage] = useState('')

  const openModal = useCallback((message = '') => {
    setPresetMessage(message)
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [])

  const value = useMemo(
    () => ({ open, presetMessage, openModal, closeModal }),
    [open, presetMessage, openModal, closeModal],
  )

  return (
    <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}
