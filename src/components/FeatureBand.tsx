import type { ReactNode, SVGProps } from 'react'

type IconComp = (props: SVGProps<SVGSVGElement>) => ReactNode

export type BandItem = { icon: IconComp; title: string; desc?: string }

export function FeatureBand({ items }: { items: BandItem[] }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-12 ring-1 ring-white/5 sm:px-10 md:py-14">
      <div className="glow glow-brand left-[10%] top-[-30%] h-[340px] w-[340px] opacity-[0.14]" />
      <div className="relative grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
        {items.map((it) => {
          const Icon = it.icon
          return (
            <div key={it.title} className="flex flex-col items-center px-4 text-center md:px-6">
              <span className="grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-white to-mist-100 text-brand-600 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)] ring-1 ring-white/40">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-white">{it.title}</h3>
              {it.desc && (
                <p className="mt-2.5 max-w-[230px] text-[13px] leading-relaxed text-white/55">
                  {it.desc}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
