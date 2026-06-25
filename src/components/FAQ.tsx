import { useState } from 'react'
import { FAQS } from '../lib/data'
import { Reveal } from './ui/Primitives'
import { ChevronDown } from '../lib/icons'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-lg border border-hairline bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            DUK
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl">
            Dažniausiai
            <br className="sm:hidden" /> užduodami klausimai
          </h2>
          <p className="mt-4 text-[14px] text-ink-400">
            Viskas, ką reikia žinoti apie mūsų paslaugas
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-ink-900">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-500 text-white ring-brand-500'
                        : 'text-ink-500 ring-hairline'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-12 text-[13.5px] leading-relaxed text-ink-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
