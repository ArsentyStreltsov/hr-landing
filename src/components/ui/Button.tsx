import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white hover:bg-brand-soft shadow-[0_10px_30px_rgba(11,61,58,0.25)]',
  secondary:
    'bg-white text-brand border border-line hover:border-brand/30 hover:bg-paper',
  ghost: 'bg-transparent text-brand hover:bg-brand/5',
  accent:
    'bg-accent text-white hover:brightness-105 shadow-[0_10px_30px_rgba(255,107,74,0.3)]',
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
