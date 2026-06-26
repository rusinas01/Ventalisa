import { type ServiceCard } from '../lib/data'
import { Img } from './ui/Primitives'
import { CheckIcon, ArrowUpRight } from '../lib/icons'

export function ServiceCardView({ card }: { card: ServiceCard }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-hairline bg-mist-50 p-4 sm:p-5">
      <div className="overflow-hidden rounded-lg ring-1 ring-black/5">
        <Img
          src={card.img}
          alt={card.title}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="text-xl font-semibold tracking-tight text-ink-900">{card.title}</h3>
        <p className="mt-1.5 text-[14px] text-ink-400">{card.desc}</p>

        <div className="my-4 h-px bg-hairline" />

        <ul className="flex-1 space-y-3">
          {card.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink-700">
              <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-ink-900 text-white">
                <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group mt-6 flex items-center justify-between rounded-lg bg-ink-900 py-2 pl-5 pr-2 text-white transition-colors duration-300 hover:bg-ink-800"
        >
          <span className="text-sm font-medium">Užsisakyti</span>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-ink-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </a>
      </div>
    </div>
  )
}
