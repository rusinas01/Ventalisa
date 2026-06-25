import { useEffect, useRef, useState } from 'react'

/**
 * Animates the leading number of a string from 0 → target when scrolled into view.
 * Initialises to the final value, so if animation can't run (reduced motion, no rAF)
 * it always shows the correct number — never a stuck "0".
 * Non-numeric values (e.g. "PRO", "Vilnius") render unchanged.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    setDisplay(value)
    if (!match) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = ref.current
    if (!el) return

    const prefix = match[1]
    const target = parseInt(match[2], 10)
    const suffix = match[3]

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true
        const duration = 1100
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`)
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        // safety: always settle on the final value
        window.setTimeout(() => setDisplay(value), duration + 150)
        io.disconnect()
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
