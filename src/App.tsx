import { Routes, Route } from 'react-router-dom'
import { ScrollManager } from './components/ScrollManager'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ResultsPage } from './pages/ResultsPage'
import { PrivacyPage } from './pages/PrivacyPage'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
