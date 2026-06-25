import { BRAND, MAP_EMBED, SERVICE_AREAS } from '../lib/data'
import { Reveal } from './ui/Primitives'
import { PinIcon } from '../lib/icons'

export function ServiceArea() {
  return (
    <section className="bg-white px-3 py-8 sm:px-5 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-lg bg-mist-50 ring-1 ring-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* MAP */}
            <Reveal className="relative min-h-[320px] lg:min-h-[440px]">
              <iframe
                title="MB Ventalisa aptarnaujama teritorija"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </Reveal>

            {/* COPY */}
            <Reveal delay={100} className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <h2 className="text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl md:leading-[1.05]">
                Aptarnaujamos teritorijos
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink-500">
                Dirbame Vilniuje ir 30 km spinduliu aplink. Skambinkite {BRAND.phone} ir
                parinksime tinkamiausią sprendimą.
              </p>

              <ul className="mt-7 space-y-3">
                {SERVICE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 ring-1 ring-hairline"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-500">
                      <PinIcon className="h-4 w-4" />
                    </span>
                    <span className="text-[15px] font-semibold text-ink-900">{area}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
