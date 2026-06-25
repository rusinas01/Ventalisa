import { BRANDS } from '../lib/data'

export function BrandsStrip() {
  const items = [...BRANDS, ...BRANDS]
  return (
    <section className="border-y border-hairline bg-white py-7">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <p className="shrink-0 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-400 sm:text-left">
            Montuojame ir aptarnaujame
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-12">
              {items.map((brand, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink-700/40 transition-colors hover:text-brand-500"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
