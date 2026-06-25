import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { BrandsStrip } from '../components/BrandsStrip'
import { AboutUs } from '../components/AboutUs'
import { Benefits } from '../components/Benefits'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { ScheduleForm } from '../components/ScheduleForm'
import { ServiceArea } from '../components/ServiceArea'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="MB Ventalisa — oro kondicionierių montavimas ir priežiūra Vilniuje"
        description="Oro kondicionavimo sistemų montavimas, priežiūra ir aptarnavimas Vilniuje ir 30 km spinduliu. 18 m. patirtis, garantinis aptarnavimas. Tel. +370 644 22558."
      />
      <Navbar />
      <main>
        <Hero />
        <BrandsStrip />
        <AboutUs />
        <Benefits />
        <Services />
        <Testimonials />
        <ScheduleForm />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
