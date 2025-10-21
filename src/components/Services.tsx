import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Camera, Sparkles, Crown } from 'lucide-react'

const Services: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Crown,
      title: 'Maquiagem para Noivas',
      description: 'Look perfeito para o seu dia mais especial. Maquiagem duradoura e resistente às lágrimas de felicidade.',
      price: 'A partir de R$ 300',
      features: ['Teste de maquiagem', 'Produtos premium', 'Duração: 6-8h'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Produção para Eventos',
      description: 'Maquiagem profissional para festas, formaturas, aniversários e eventos especiais.',
      price: 'A partir de R$ 200',
      features: ['Look personalizado', 'Produtos de qualidade', 'Duração: 4-6h'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Maquiagem para Fotos/Vídeos',
      description: 'Maquiagem otimizada para câmeras e iluminação profissional. Perfeita para ensaios fotográficos.',
      price: 'A partir de R$ 250',
      features: ['Técnicas HD', 'Produtos fotográficos', 'Duração: 3-4h'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Make Casual & Dia a Dia',
      description: 'Maquiagem natural e elegante para o dia a dia, reuniões importantes e ocasiões especiais.',
      price: 'A partir de R$ 150',
      features: ['Look natural', 'Produtos leves', 'Duração: 2-3h'],
      color: 'from-green-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="section-padding bg-matteblack">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-lg">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Transforme sua beleza com{' '}
            <span className="gradient-text">nossos serviços</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de maquiagem profissional, 
            cada um adaptado às suas necessidades e ocasião especial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-darkgray rounded-2xl p-6 h-full hover-lift border border-gray-800 hover:border-gold/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-gold font-bold text-lg mb-4">
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-gold to-lightpink text-matteblack font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                >
                  Saiba Mais
                </motion.button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-lightpink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold/10 to-lightpink/10 rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para um orçamento personalizado
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services


