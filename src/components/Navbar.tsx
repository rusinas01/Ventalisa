import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND, NAV } from '../lib/data'
import { PhoneIcon } from '../lib/icons'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label={BRAND.name}>
      <img
        src="/logo.svg"
        alt={BRAND.name}
        className="h-12 w-auto select-none"
        style={light ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const stripHash = (s: string) => s.split('#')[0] || '/'
  const activeIdx = NAV.findIndex((n) => stripHash(n.to) === pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="relative z-30 px-3 pt-3 sm:px-4 sm:pt-3">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-hairline bg-[#f1f2f2] px-3 py-2.5 transition-shadow duration-300 sm:px-4 ${
          scrolled
            ? 'shadow-[0_10px_30px_-14px_rgba(8,22,44,0.22)] backdrop-blur-xl'
            : 'shadow-[0_4px_18px_-12px_rgba(8,22,44,0.15)]'
        }`}
      >
        <Logo />

        {/* center nav — white pills */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {NAV.map((item, i) => {
            const isActive = i === activeIdx
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-lg border px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? 'border-transparent bg-slate-200 text-ink-900'
                    : 'border-hairline bg-white text-ink-700 hover:bg-mist-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center rounded-lg border border-hairline bg-white px-4 py-2.5 text-[13.5px] font-semibold text-ink-900 transition-colors hover:bg-mist-50 sm:inline-flex"
          >
            Užsakyti
          </a>
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink-800"
          >
            <PhoneIcon className="h-4 w-4 text-brand-300" />
            {BRAND.phone}
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-white lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-ink-900 transition-transform ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-ink-900 transition-opacity ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-ink-900 transition-transform ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-hairline bg-white p-3 shadow-xl lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-ink-700 hover:bg-mist-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-ink-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Užsakyti
          </a>
        </div>
      )}
    </header>
  )
}
