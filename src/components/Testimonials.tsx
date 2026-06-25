import { TESTIMONIALS } from '../lib/data'
import { Reveal, SectionHeading } from './ui/Primitives'
import { StarIcon } from '../lib/icons'

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-mist-50 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <SectionHeading
            eyebrow="Atsiliepimai"
            title={
              <>
                Ką sako
                <br />
                mūsų klientai
              </>
            }
          />
          <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 ring-1 ring-hairline">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink-900">5,0 / 5,0</p>
              <p className="text-[11px] text-ink-400">Klientų įvertinimai</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-lg bg-white p-7 ring-1 ring-hairline transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(8,22,44,0.35)]">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-500 text-sm font-semibold text-white">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                    <p className="text-[12px] text-ink-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
