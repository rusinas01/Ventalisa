import { BENEFITS, type BenefitIcon } from '../lib/data'
import { Reveal } from './ui/Primitives'
import { ClockIcon, DollarIcon, AwardIcon, CalendarIcon } from '../lib/icons'

const ICONS: Record<BenefitIcon, typeof ClockIcon> = {
  clock: ClockIcon,
  dollar: DollarIcon,
  award: AwardIcon,
  calendar: CalendarIcon,
}

export function Benefits() {
  return (
    <section className="bg-white px-3 py-8 sm:px-5 md:py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-12 ring-1 ring-white/5 sm:px-10 md:py-16">
            <div className="glow glow-brand left-[8%] top-[-30%] h-[360px] w-[360px] opacity-[0.16]" />
            <div className="glow glow-brand right-[4%] bottom-[-40%] h-[300px] w-[300px] opacity-[0.1]" />

            <div className="relative grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
              {BENEFITS.map((b) => {
                const Icon = ICONS[b.icon]
                return (
                  <div
                    key={b.title}
                    className="flex flex-col items-center px-4 text-center md:px-6"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-white to-mist-100 text-brand-600 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)] ring-1 ring-white/40">
                      <Icon className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-white">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 max-w-[240px] text-[13px] leading-relaxed text-white/55">
                      {b.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
