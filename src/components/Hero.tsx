import { BRAND, HERO_STATS, IMG } from '../lib/data'
import { Img, Reveal } from './ui/Primitives'
import { CountUp } from './CountUp'
import { StarIcon, GoogleG, PhoneIcon, ArrowUpRight } from '../lib/icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pt-3 pb-14 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-7xl">
        {/* ---------- HERO IMAGE CARD ---------- */}
        <div className="animate-in relative overflow-hidden rounded-lg ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(8,22,44,0.6)]">
          {/* background image (slow ken-burns zoom) */}
          <Img
            src={IMG.heroTech}
            alt="MB Ventalisa specialistai montuoja oro kondicionierių"
            className="animate-kenburns absolute inset-0 h-full w-full object-cover"
          />
          {/* gradient overlays for legibility (lighter — lets the photo show) */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/88 via-ink-950/45 to-ink-950/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-ink-950/15" />

          {/* content */}
          <div className="relative flex min-h-[560px] flex-col justify-center px-6 py-14 sm:px-10 md:min-h-[680px] md:px-14 lg:px-16">
            <div className="max-w-3xl">
              {/* google reviews pill */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-ink-950/45 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur">
                <span className="grid h-5 w-5 place-items-center rounded bg-white">
                  <GoogleG className="h-3.5 w-3.5" />
                </span>
                <span className="text-[13px] font-semibold text-white">Google</span>
                <span className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-3 w-3" />
                  ))}
                </span>
              </div>

              {/* headline */}
              <h1 className="text-white">
                <span className="block text-[1.95rem] font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-[4.2rem]">
                  Ventalisa
                </span>
                <span className="mt-1 block text-[1.95rem] font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-[4.2rem]">
                  Oro kondicionavimas
                  <br />
                  <span className="text-brand-400">be rūpesčių.</span>
                </span>
              </h1>

              {/* paragraph */}
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
                Oro kondicionierių montavimas, priežiūra ir remontas Vilniuje ir 30 km
                spinduliu. 18 metų patirtis.
              </p>

              {/* buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-mist-50 active:scale-[0.98] sm:w-auto sm:justify-start"
                >
                  Gauti pasiūlymą
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-500 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                </a>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/10 transition-colors duration-300 hover:bg-ink-800 sm:w-auto sm:justify-start"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-300" />
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- STATS BAR (spec-list on mobile, grid on larger screens) ---------- */}
        <div className="mt-5 rounded-lg bg-mist-50 px-5 py-3 ring-1 ring-hairline sm:px-8 sm:py-7 md:px-10">
          <dl className="flex flex-col divide-y divide-hairline sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-7 sm:divide-y-0 lg:grid-cols-5">
            {HERO_STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 110}
                className="flex items-center justify-between gap-4 py-3.5 sm:block sm:py-0"
              >
                <dt className="text-[1.7rem] font-semibold leading-none tracking-tight text-ink-900 sm:text-3xl sm:leading-tight md:text-[2rem]">
                  <CountUp value={s.value} />
                </dt>
                <dd className="text-right text-[13px] font-medium text-ink-400 sm:mt-1 sm:text-left">
                  {s.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
