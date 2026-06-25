import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ButtonHTMLAttributes,
  type ImgHTMLAttributes,
} from 'react'
import { ArrowRight } from '../../lib/icons'

/* ----------------------------- Pill / Badge ----------------------------- */
export function Pill({
  children,
  tone = 'sage',
  className = '',
}: {
  children: ReactNode
  tone?: 'sage' | 'mint' | 'forest' | 'outline'
  className?: string
}) {
  const tones: Record<string, string> = {
    sage: 'bg-mist-100 text-brand-600 ring-1 ring-brand-500/15',
    mint: 'bg-brand-100 text-brand-600 ring-1 ring-brand-500/20',
    forest: 'bg-brand-500 text-white',
    outline: 'bg-white/70 text-ink-700 ring-1 ring-hairline backdrop-blur',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/* ------------------------------- Button -------------------------------- */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'mint' | 'ghost' | 'dark'
  withArrow?: boolean
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
  as = 'button',
  href,
  ...rest
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 shadow-[0_10px_30px_-12px_rgba(25,141,212,0.55)]',
    mint: 'bg-white text-ink-900 hover:bg-mist-100 shadow-[0_10px_30px_-12px_rgba(10,28,40,0.3)]',
    ghost:
      'bg-white text-ink-700 ring-1 ring-hairline hover:ring-brand-500/40 hover:bg-mist-50',
    dark: 'bg-ink-900 text-white hover:bg-ink-800',
  }
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${variants[variant]} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  )

  if (as === 'a') {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}

/* ------------------------- Image w/ graceful fallback ------------------------- */
export function Img({
  src,
  alt = '',
  className = '',
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-ink-800 via-ink-700 to-ink-900 ${className}`}
        aria-label={alt}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 text-brand-300/70"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="9" cy="9" r="1.4" />
        </svg>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}

/* ------------------------- Reveal on scroll wrapper ------------------------- */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity .7s var(--ease-smooth) ${delay}ms, transform .7s var(--ease-smooth) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ------------------------- Section tag (pill eyebrow) ------------------------- */
export function SectionTag({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-hairline bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400 ${className}`}
    >
      {children}
    </span>
  )
}

/* ------------------------- Section heading helper ------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  sub,
}: {
  eyebrow?: string
  title: ReactNode
  align?: 'left' | 'center'
  sub?: ReactNode
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`mb-5 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <SectionTag>{eyebrow}</SectionTag>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-[15px] leading-relaxed text-ink-500">{sub}</p>}
    </div>
  )
}
