import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import { ScheduleForm } from '../components/ScheduleForm'
import { Footer } from '../components/Footer'
import { Img, Reveal, SectionTag } from '../components/ui/Primitives'
import { FeatureBand } from '../components/FeatureBand'
import { JOBS, IMG } from '../lib/data'
import { AwardIcon, RefreshIcon, BuildingIcon, HandshakeIcon, PinIcon } from '../lib/icons'

const STATS = [
  { icon: RefreshIcon, title: 'Šimtai atliktų darbų' },
  { icon: BuildingIcon, title: 'Namai ir verslas' },
  { icon: AwardIcon, title: '18 metų patirtis' },
  { icon: HandshakeIcon, title: 'Aukšti klientų įvertinimai' },
]

function JobsHero() {
  return (
    <section className="bg-white px-5 pt-12 pb-10 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionTag>Darbai</SectionTag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
            Atlikti darbai
          </h1>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-ink-500">
            Keletas pastarojo meto oro kondicionavimo projektų Vilniuje ir aplinkiniuose
            rajonuose — sumontuota tvarkingai ir patikimai.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function JobsGrid() {
  return (
    <section className="bg-white px-5 py-10 md:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job, i) => (
          <Reveal key={job.title} delay={i * 70}>
            <div className="group overflow-hidden rounded-lg border border-hairline bg-mist-50 transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(10,28,40,0.35)]">
              <div className="overflow-hidden">
                <Img
                  src={IMG[job.img]}
                  alt={job.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-500">
                  {job.type}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink-900">
                  {job.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-ink-400">
                  <PinIcon className="h-4 w-4 text-ink-400" />
                  {job.location}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Atlikti darbai — MB Ventalisa | Oro kondicionavimas Vilniuje"
        description="Pastarojo meto oro kondicionierių montavimo, priežiūros ir remonto darbai Vilniuje ir 30 km spinduliu. MB Ventalisa — 18 m. patirtis."
      />
      <Navbar />
      <main>
        <JobsHero />
        <JobsGrid />
        <section className="bg-white px-5 py-6 md:py-10">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <FeatureBand items={STATS} />
            </Reveal>
          </div>
        </section>
        <ScheduleForm />
      </main>
      <Footer />
    </div>
  )
}
