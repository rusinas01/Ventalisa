import { BRAND, IMG } from '../lib/data'
import { Button, Img, Reveal, SectionTag } from './ui/Primitives'
import { CountUp } from './CountUp'
import { FeatureBand } from './FeatureBand'
import {
  PinIcon,
  AwardIcon,
  HeadsetIcon,
  HandshakeIcon,
  BuildingIcon,
  SettingsIcon,
  ShieldIcon,
} from '../lib/icons'

const STORY_BAND = [
  { icon: PinIcon, title: 'Vilnius ir 30 km spinduliu' },
  { icon: AwardIcon, title: '18 metų patirtis srityje' },
  { icon: HeadsetIcon, title: 'Greitas aptarnavimas ir konsultacijos' },
  { icon: HandshakeIcon, title: 'Sąžiningas ir profesionalus požiūris' },
]

const APART_BAND = [
  {
    icon: BuildingIcon,
    title: 'Vietos patirtis',
    desc: 'Puikiai išmanome Vilniaus objektus — butus, namus, biurus bei komercines patalpas',
  },
  {
    icon: SettingsIcon,
    title: 'Techninis meistriškumas',
    desc: 'Patyrę specialistai, dirbantys su naujausiomis kondicionavimo sistemomis',
  },
  {
    icon: ShieldIcon,
    title: 'Kokybė ir garantija',
    desc: 'Tvarkingas montavimas, garantija atliktiems darbams ir pogarantinis aptarnavimas',
  },
  {
    icon: HandshakeIcon,
    title: 'Ilgalaikis bendradarbiavimas',
    desc: 'Kuriame ilgalaikius santykius su klientais teikdami patikimą ir greitą priežiūrą',
  },
]

const STATS = [
  { value: '18+', label: 'Metų patirtis' },
  { value: 'PRO', label: 'Patvirtinta tapatybė' },
  { value: 'Garantija', label: 'Atliktiems darbams' },
]

const CERTS = [
  {
    title: 'PRO statusas',
    desc: 'PRO paslaugų teikėjas paslaugos.lt platformoje',
  },
  {
    title: 'Tapatybė patvirtinta',
    desc: 'Patvirtinta įmonės tapatybė ir kontaktiniai duomenys',
  },
  {
    title: 'Garantija darbams',
    desc: 'Garantinis ir pogarantinis sumontuotų sistemų aptarnavimas',
  },
]

export function AboutHero() {
  return (
    <section className="bg-white px-5 pt-12 pb-12 text-center md:pt-16">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
        <SectionTag>Apie mus</SectionTag>
        <h1 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
          Apie {BRAND.name}
        </h1>
        <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-ink-500">
          Patikimas oro kondicionavimo partneris Vilniuje. 18 metų patirtis ir PRO
          statusas.
        </p>
      </Reveal>
    </section>
  )
}

export function AboutStory() {
  return (
    <section className="bg-white px-5 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl">
              Patirtis, kuria galima pasitikėti
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-ink-500">
              <p>
                {BRAND.name} — Vilniaus įmonė, turinti 18 metų patirtį oro kondicionavimo
                srityje. Parduodame, montuojame, prižiūrime ir remontuojame oro
                kondicionierius namuose, butuose, biuruose ir komercinėse patalpose.
              </p>
              <p>
                Parenkame tinkamiausią sprendimą pagal objektą ir sumontuojame
                profesionaliai. Teikiame garantinį ir pogarantinį aptarnavimą, profilaktinę
                priežiūrą bei šaliname gedimus.
              </p>
              <p>
                Dirbame atsakingai ir laikomės terminų. Nesvarbu, ar esate namų savininkas,
                ar verslo atstovas — pasirūpinsime jūsų patalpų komfortu ištisus metus.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-lg ring-1 ring-black/5 shadow-[0_40px_80px_-50px_rgba(10,28,40,0.45)]">
              <Img
                src={IMG.heroTech}
                alt="MB Ventalisa specialistas montuoja kondicionierių"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <FeatureBand items={STORY_BAND} />
        </Reveal>
      </div>
    </section>
  )
}

export function AboutStats() {
  return (
    <section className="bg-white px-5 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-lg bg-mist-100 px-6 py-10 sm:px-10">
            <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="mt-2 text-[14px] font-medium text-ink-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" withArrow as="a" href="#contact">
            Užsakyti paslaugą
          </Button>
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-lg px-5 py-3.5 text-sm font-semibold text-ink-900 ring-1 ring-hairline transition-colors hover:bg-mist-50"
          >
            {BRAND.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatSetsApart() {
  return (
    <section className="bg-white px-5 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
            Kas mus išskiria
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <FeatureBand items={APART_BAND} />
        </Reveal>
      </div>
    </section>
  )
}

export function AboutCommitment() {
  return (
    <section className="bg-white px-5 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-lg bg-mist-50 px-6 py-12 ring-1 ring-hairline sm:px-12 sm:py-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                Mūsų įsipareigojimas
              </h2>
              <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-ink-500">
                <p>
                  Suprantame, kad gerai veikiantis oro kondicionierius svarbus jūsų
                  komfortui. Todėl dirbame patikimai, profesionaliai ir greitai.
                </p>
                <p>
                  Sumontuojame, prižiūrime ir remontuojame sistemas. Reguliariai atliekame
                  profilaktinę priežiūrą, kad jos veiktų sklandžiai visus metus.
                </p>
                <p>
                  Sekame naujausias technologijas ir siūlome ilgaamžius, efektyvius
                  sprendimus kiekvienam objektui.
                </p>
              </div>
            </div>

            <h3 className="mt-12 text-center text-xl font-semibold tracking-tight text-ink-900">
              Statusas ir garantijos
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CERTS.map((c) => (
                <div key={c.title} className="rounded-lg bg-ink-900 px-5 py-6 text-center text-white">
                  <h4 className="text-[14px] font-semibold">{c.title}</h4>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/55">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
