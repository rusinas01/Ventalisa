import { useState } from 'react'
import { SERVICE_TABS } from '../lib/data'
import { Reveal, SectionTag } from './ui/Primitives'
import { ServiceCardView } from './ServiceCardView'

export function Services() {
  const [active, setActive] = useState(SERVICE_TABS[0].id)
  const current = SERVICE_TABS.find((t) => t.id === active) ?? SERVICE_TABS[0]

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="glow glow-brand left-[-6%] top-24 h-[360px] w-[360px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* ---------- HEADER ---------- */}
        <Reveal className="flex flex-col items-center text-center">
          <SectionTag>Mūsų paslaugos</SectionTag>
          <h2 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl">
            Paslaugos ir sprendimai
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-500">
            Profesionalus oro kondicionavimo sistemų montavimas, priežiūra ir remontas
            namams bei verslui Vilniuje ir 30 km spinduliu.
          </p>
        </Reveal>

        {/* ---------- TABS ---------- */}
        <Reveal delay={80} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Service type"
            className="inline-flex gap-1.5 rounded-lg border border-hairline bg-mist-100 p-1.5"
          >
            {SERVICE_TABS.map((tab) => {
              const isActive = tab.id === active
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 sm:px-8 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-[0_8px_20px_-8px_rgba(25,141,212,0.5)]'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ---------- CARDS ---------- */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {current.cards.map((card, i) => (
            <Reveal key={`${current.id}-${card.title}`} delay={i * 80}>
              <ServiceCardView card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
