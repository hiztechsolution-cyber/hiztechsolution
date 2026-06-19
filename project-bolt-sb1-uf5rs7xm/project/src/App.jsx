import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function App() {
  useScrollAnimation()

  useEffect(() => {
    document.title = 'Hi-Z Tech Solution | Digital Marketing Agency Lahore'
  }, [])

  return (
    <div className="min-h-screen bg-[#060b18]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
