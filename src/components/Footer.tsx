import { Link } from 'react-router-dom'
import { BRAND } from '../lib/data'
import { Logo } from './Navbar'
import { PhoneIcon, FacebookIcon, InstagramIcon } from '../lib/icons'

const FOOTER_NAV = [
  { label: 'Pradžia', to: '/' },
  { label: 'Apie mus', to: '/about' },
  { label: 'Paslaugos', to: '/services' },
  { label: 'Darbai', to: '/results' },
  { label: 'Kontaktai', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8">
        {/* main columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <Logo light />
            <p className="mt-4 max-w-[15rem] text-[13px] leading-relaxed text-white/50">
              Patikimas oro kondicionavimo partneris Vilniuje ir 30 km spinduliu. 18 metų
              patirtis.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[FacebookIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* phone */}
          <div>
            <h4 className="text-[14px] font-medium text-white">Skambinkite</h4>
            <a
              href={BRAND.phoneHref}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-600"
            >
              <PhoneIcon className="h-4 w-4" />
              {BRAND.phone}
            </a>
          </div>

          {/* area */}
          <div>
            <h4 className="text-[14px] font-medium text-white">Aptarnaujame</h4>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">
              Vilnius
              <br />
              ir 30 km spinduliu
            </p>
          </div>

          {/* email */}
          <div>
            <h4 className="text-[14px] font-medium text-white">El. paštas</h4>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 block text-[13px] text-white/50 transition-colors hover:text-white"
            >
              {BRAND.email}
            </a>
            <span className="mt-4 inline-flex items-center rounded-lg bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/70 ring-1 ring-white/10">
              PRO · Tapatybė patvirtinta
            </span>
          </div>
        </div>

        {/* bottom nav bar */}
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-lg bg-mist-50 px-6 py-4 text-[13px] font-medium text-ink-700">
          {FOOTER_NAV.map((item) => (
            <Link key={item.label} to={item.to} className="transition-colors hover:text-brand-500">
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-center text-[12px] text-white/40">
          © {new Date().getFullYear()} {BRAND.name}. Visos teisės saugomos.
        </p>
      </div>
    </footer>
  )
}
