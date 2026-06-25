import type { ServiceCard } from '../lib/data'
import { Reveal } from './ui/Primitives'
import { ServiceCardView } from './ServiceCardView'

export function ServiceShowcase({
  title,
  subtitle,
  cards,
}: {
  title: string
  subtitle?: string
  cards: ServiceCard[]
}) {
  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-500">
              {subtitle}
            </p>
          )}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <ServiceCardView card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
