import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import {
  AboutHero,
  AboutStory,
  AboutStats,
  WhatSetsApart,
  AboutCommitment,
} from '../components/AboutSections'
import { ScheduleForm } from '../components/ScheduleForm'
import { Footer } from '../components/Footer'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Apie mus — MB Ventalisa | Oro kondicionavimas Vilniuje, 18 m. patirtis"
        description="MB Ventalisa — patikima oro kondicionavimo įmonė Vilniuje. 18 metų patirtis, PRO statusas, garantinis aptarnavimas. Montavimas, priežiūra ir remontas."
      />
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <WhatSetsApart />
        <AboutCommitment />
        <ScheduleForm />
      </main>
      <Footer />
    </div>
  )
}
