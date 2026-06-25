import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import { ScheduleForm } from '../components/ScheduleForm'
import { ServiceArea } from '../components/ServiceArea'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { Reveal, SectionTag } from '../components/ui/Primitives'
import { BRAND } from '../lib/data'
import { PhoneIcon, ClockIcon, PinIcon } from '../lib/icons'

const INFO = [
  { icon: PhoneIcon, label: 'Skambinkite', value: BRAND.phone, href: BRAND.phoneHref },
  { icon: ClockIcon, label: 'Darbo laikas', value: 'I–VI · 8:00–20:00', sub: 'Skubūs gedimai — pirmumo tvarka' },
  { icon: PinIcon, label: 'Aptarnaujame', value: 'Vilnius ir 30 km', sub: 'aplink miestą' },
]

function ContactHero() {
  return (
    <section className="bg-white px-5 pt-12 pb-12 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionTag>Kontaktai</SectionTag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
            Susisiekite
          </h1>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-ink-500">
            Klausimai, pasiūlymai ar skubus gedimas? Susisiekite bet kada — atsakysime
            greitai, patarsime ir pasiūlysime tinkamiausią sprendimą.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {INFO.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <a
                href={c.href ?? undefined}
                className="flex h-full flex-col items-center rounded-lg border border-hairline bg-mist-50 px-6 py-7 text-center transition-colors hover:bg-mist-100"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500 text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                  {c.label}
                </span>
                <span className="mt-1 text-[15px] font-medium text-ink-900">{c.value}</span>
                {c.sub && <span className="mt-0.5 text-[12.5px] text-ink-400">{c.sub}</span>}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Kontaktai — MB Ventalisa | Oro kondicionavimas Vilniuje, +370 644 22558"
        description="Susisiekite su MB Ventalisa dėl oro kondicionierių montavimo, priežiūros ar remonto Vilniuje. Tel. +370 644 22558. Nemokama konsultacija ir pasiūlymas."
      />
      <Navbar />
      <main>
        <ContactHero />
        <ScheduleForm />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
