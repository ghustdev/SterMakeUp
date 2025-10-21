import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const Hero: React.FC = () => {
  const particlesRef = useRef<any>(null)

  useEffect(() => {
    const initParticles = async () => {
      try {
        if (particlesRef.current) {
          await loadSlim(particlesRef.current)
        }
      } catch (error) {
        console.warn('Particles failed to load:', error)
      }
    }
    initParticles()
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#D4AF37',
      },
      links: {
        color: '#D4AF37',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          ref={particlesRef}
          options={particlesOptions}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-matteblack/80 via-matteblack/60 to-matteblack/80 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <Sparkles className="text-gold w-6 h-6" />
              <span className="text-gold font-medium">Beleza Profissional</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Beleza que</span>
              <br />
              <span className="text-white">inspira confiança</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transforme cada momento com a SterMakeUp. 
              Serviços profissionais de maquiagem para noivas, 
              eventos e produção.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Agende Agora</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Ver Portfólio</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightpink/20 to-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold to-lightpink rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">💄</span>
                  </div>
                  <p className="text-white/80 text-lg">Imagem da Hero</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-lightpink/20 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">💎</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


