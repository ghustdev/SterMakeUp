import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { sendEmail } from '../config/emailjs'

const Contact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Maquiagem para Noivas',
    'Produção para Eventos',
    'Maquiagem para Fotos/Vídeos',
    'Make Casual & Dia a Dia',
    'Outro'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          service: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        console.error('Erro ao enviar email:', result.error)
        // You can add error handling here
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      // You can add error handling here
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      description: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@stermakeup.com',
      description: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo - SP',
      description: 'Atendimento em domicílio'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sáb: 8h às 18h',
      description: 'Agendamento flexível'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-darkgray">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-lg">Contato</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Vamos conversar sobre seu{' '}
            <span className="gradient-text">próximo evento</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Entre em contato conosco para agendar uma consulta ou solicitar um orçamento. 
            Estamos aqui para tornar seu momento especial ainda mais único.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-matteblack rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h4>
                <p className="text-gray-300">
                  Entraremos em contato em breve. Obrigada pela confiança!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Data do evento
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos mais sobre seu evento e suas expectativas..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-matteblack border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4 p-4 bg-matteblack rounded-xl border border-gray-800 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-lightpink rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-matteblack" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gold font-medium mb-1">{info.info}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-br from-gold/10 to-lightpink/10 rounded-2xl p-6 border border-gold/20"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                Pronta para transformar seu evento?
              </h4>
              <p className="text-gray-300 mb-4">
                Agende uma consulta gratuita e descubra como podemos tornar seu momento especial ainda mais único.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full"
              >
                Agendar Consulta Gratuita
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
