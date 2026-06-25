import { BRAND, IMG } from '../lib/data'
import { Img, Reveal, SectionTag } from './ui/Primitives'
import { CheckIcon, ArrowUpRight } from '../lib/icons'

const POINTS = [
  'Profesionalus montavimas ir priežiūra',
  'Nemokama konsultacija ir aiškus pasiūlymas',
  'Garantinis ir pogarantinis aptarnavimas',
]

export function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-10 flex flex-col items-center text-center">
          <SectionTag>Kodėl MB Ventalisa</SectionTag>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — team image */}
          <Reveal>
            <div className="overflow-hidden rounded-lg ring-1 ring-black/5 shadow-[0_40px_80px_-50px_rgba(10,28,40,0.45)]">
              <Img
                src={IMG.team}
                alt="MB Ventalisa specialistų komanda"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          {/* RIGHT — statement + checklist + trust row */}
          <Reveal delay={100}>
            <p className="text-2xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-[1.75rem] sm:leading-[1.35]">
              Patikimas oro kondicionavimo partneris Vilniuje — namams ir verslui. Nuo
              profesionalaus montavimo iki greito aptarnavimo: pasirūpiname, kad jūsų
              patalpose būtų komfortas be rūpesčių ir laukimo.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3.5">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-500 text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-ink-800">{p}</span>
                </li>
              ))}
            </ul>

            <div className="my-8 h-px w-full bg-hairline" />

            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              {/* trust */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    'https://i.pravatar.cc/64?img=12',
                    'https://i.pravatar.cc/64?img=33',
                    'https://i.pravatar.cc/64?img=53',
                  ].map((src) => (
                    <Img
                      key={src}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    />
                  ))}
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-[11px] font-semibold text-white ring-2 ring-white">
                    +
                  </span>
                </div>
                <span className="text-[13px] font-medium text-ink-500">
                  Pasitiki Vilniaus gyventojai ir verslas
                </span>
              </div>

              {/* CTA */}
              <a
                href={BRAND.phoneHref}
                className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-ink-900 py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                Užsakyti paslaugą
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-ink-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
