import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'
import { ServiceShowcase } from '../components/ServiceShowcase'
import { InstallationFeature, OurProcess } from '../components/ServicesExtra'
import { ScheduleForm } from '../components/ScheduleForm'
import { Footer } from '../components/Footer'
import { SERVICE_TABS } from '../lib/data'

const residential = SERVICE_TABS.find((t) => t.id === 'gyvenamosios')!
const commercial = SERVICE_TABS.find((t) => t.id === 'komercines')!
const SUBTITLE =
  'Oro kondicionavimo sistemų montavimas, priežiūra ir remontas namams bei verslui Vilniuje ir 30 km spinduliu.'

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Paslaugos — MB Ventalisa | Kondicionierių montavimas ir priežiūra Vilniuje"
        description="Oro kondicionierių montavimas, priežiūra, valymas ir remontas namams bei verslui Vilniuje ir 30 km spinduliu. Garantinis aptarnavimas, 18 m. patirtis."
      />
      <Navbar />
      <main className="pt-4">
        <Services />
        <ServiceShowcase title="Komercinės patalpos" subtitle={SUBTITLE} cards={commercial.cards} />
        <ServiceShowcase title="Gyvenamosios patalpos" subtitle={SUBTITLE} cards={residential.cards} />
        <InstallationFeature />
        <OurProcess />
        <ScheduleForm />
      </main>
      <Footer />
    </div>
  )
}
