import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Award, Users } from 'lucide-react'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Satisfeitas' },
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
    { icon: Heart, value: '100%', label: 'Dedicação' },
  ]

  return (
    <section id="about" className="section-padding bg-darkgray">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-gold font-medium text-lg">Sobre Nós</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-6">
                Mais de 5 anos realçando a{' '}
                <span className="gradient-text">beleza</span> de mulheres únicas
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Na SterMakeUp, acreditamos que cada mulher tem uma beleza única que merece ser 
              realçada com arte e técnica. Nossa missão é transformar momentos especiais em 
              memórias inesquecíveis através de maquiagem profissional e personalizada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Com mais de 5 anos de experiência no mercado, já atendemos centenas de clientes 
              em casamentos, eventos corporativos, sessões de fotos e produções. Cada trabalho 
              é único e executado com paixão e dedicação.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-lightpink rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-matteblack" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                {/* Placeholder for about image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-lightpink/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-lightpink rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👩‍🎨</span>
                    </div>
                    <p className="text-white/80 text-lg">Foto da Maquiadora</p>
                  </div>
                </div>
                
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl"></div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-gold/30 rounded-full flex items-center justify-center bg-matteblack/50"
              >
                <span className="text-2xl">✨</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-lightpink to-gold rounded-full flex items-center justify-center"
              >
                <span className="text-xl">💄</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


