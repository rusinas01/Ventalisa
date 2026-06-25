import { IMG } from '../lib/data'
import { Img, Reveal } from './ui/Primitives'
import { FeatureBand } from './FeatureBand'
import { CheckIcon, RefreshIcon, BuildingIcon, SettingsIcon, SirenIcon } from '../lib/icons'

const INSTALL_TYPES = [
  'Sieninių kondicionierių montavimas',
  'Multi-split sistemos',
  'Šilumos siurbliai oras–oras',
  'Senų sistemų keitimas',
]

const PROCESS_STEPS = [
  'Objekto įvertinimas ir konsultacija',
  'Tinkamos sistemos parinkimas',
  'Profesionalus montavimas',
  'Paleidimas, derinimas ir garantija',
]

const BAND_ITEMS = [
  {
    icon: RefreshIcon,
    title: 'Montavimas',
    desc: 'Profesionalus oras–oras kondicionierių montavimas namuose ir butuose',
  },
  {
    icon: BuildingIcon,
    title: 'Komercinės sistemos',
    desc: 'Multi-split ir vėsinimo sprendimai biurams, parduotuvėms bei HoReCa',
  },
  {
    icon: SettingsIcon,
    title: 'Priežiūra ir valymas',
    desc: 'Reguliari priežiūra, filtrų valymas ir sistemų efektyvumo patikra',
  },
  {
    icon: SirenIcon,
    title: 'Remontas',
    desc: 'Greitas gedimų šalinimas ir pogarantinis visų gamintojų aptarnavimas',
  },
]

export function InstallationFeature() {
  return (
    <section className="bg-white px-3 py-8 sm:px-5 md:py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-lg bg-mist-50 p-7 ring-1 ring-hairline sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl md:leading-[1.08]">
                Montavimas ir sistemų keitimas
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink-500">
                Profesionalus oro kondicionierių montavimas ir senų sistemų keitimas. Mūsų
                specialistai parenka tinkamą sprendimą, sumontuoja tvarkingai ir užtikrina
                ilgalaikį sistemos veikimą — namuose, biure ar komercinėse patalpose.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">Montavimo tipai</h3>
              <ul className="mt-4 space-y-3">
                {INSTALL_TYPES.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[14px] text-ink-700">
                    <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-ink-900 text-white">
                      <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg ring-1 ring-black/5">
              <Img
                src={IMG.case1}
                alt="MB Ventalisa kondicionieriaus montavimo darbai"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function OurProcess() {
  return (
    <section className="bg-white px-3 py-8 sm:px-5 md:py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* process card */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-lg bg-mist-50 p-7 ring-1 ring-hairline sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-lg ring-1 ring-black/5">
              <Img
                src={IMG.process}
                alt="MB Ventalisa objekto įvertinimas"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl">
                Kaip dirbame
              </h2>
              <ol className="mt-7 divide-y divide-hairline">
                {PROCESS_STEPS.map((step, i) => (
                  <li key={step} className="flex items-center gap-4 py-4">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[13px] font-semibold ${
                        i === 0
                          ? 'bg-ink-900 text-white'
                          : 'bg-mist-200 text-ink-500'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-[15px] ${
                        i === 0 ? 'font-semibold text-ink-900' : 'font-medium text-ink-500'
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* dark band */}
        <Reveal delay={100}>
          <FeatureBand items={BAND_ITEMS} />
        </Reveal>
      </div>
    </section>
  )
}
