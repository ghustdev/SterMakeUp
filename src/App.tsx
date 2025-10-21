import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    // Initialize locomotive scroll with error handling
    const initLocomotiveScroll = async () => {
      try {
        const { default: LocomotiveScroll } = await import('locomotive-scroll')
        new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          multiplier: 1,
          class: 'is-revealed'
        })
      } catch (error) {
        console.warn('Locomotive Scroll failed to load:', error)
      }
    }

    initLocomotiveScroll()

    // Cleanup
    return () => {
      const scrollInstance = document.querySelector('[data-scroll-container]')
      if (scrollInstance) {
        scrollInstance.remove()
      }
    }
  }, [])

  return (
    <div className="App" data-scroll-container>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

