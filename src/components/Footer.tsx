import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Facebook, Youtube, Heart, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  const services = [
    'Maquiagem para Noivas',
    'Produção para Eventos',
    'Maquiagem para Fotos',
    'Make Dia a Dia',
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-matteblack border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightpink rounded-full flex items-center justify-center">
                  <span className="text-matteblack font-bold text-sm">S</span>
                </div>
                <span className="text-2xl font-serif font-bold gradient-text">
                  SterMakeUp
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformando momentos especiais em memórias inesquecíveis através 
                de maquiagem profissional e personalizada.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-gold transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
                  📞 (11) 99999-9999
                </p>
                <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
                  ✉️ contato@stermakeup.com
                </p>
                <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
                  📍 São Paulo - SP
                </p>
                <p className="text-sm">
                  🕒 Seg - Sáb: 8h às 18h
                </p>
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-gold/10 to-lightpink/10 rounded-2xl p-8 mb-12 border border-gold/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-300 mb-6">
                Receba dicas de beleza, tendências e ofertas exclusivas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary whitespace-nowrap"
                >
                  Inscrever-se
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>© 2025 SterMakeUp. Feito com</span>
                <Heart className="w-4 h-4 text-gold fill-current" />
                <span>e muito carinho.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gold to-lightpink rounded-full flex items-center justify-center text-matteblack shadow-lg hover:shadow-gold/20 transition-all duration-300 z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer


