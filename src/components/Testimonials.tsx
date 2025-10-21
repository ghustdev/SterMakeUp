import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Noiva',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'A SterMakeUp transformou meu dia de casamento em algo ainda mais especial. A maquiagem ficou perfeita e durou o dia todo. Recomendo de olhos fechados!',
      event: 'Casamento'
    },
    {
      id: 2,
      name: 'Ana Costa',
      role: 'Cliente',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Profissionalismo e qualidade excepcionais. A maquiadora é muito atenciosa e o resultado superou todas as minhas expectativas.',
      event: 'Formatura'
    },
    {
      id: 3,
      name: 'Juliana Santos',
      role: 'Cliente',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Já fiz várias maquiagens com a SterMakeUp e sempre fico encantada. Produtos de qualidade e técnica impecável.',
      event: 'Evento Corporativo'
    },
    {
      id: 4,
      name: 'Camila Oliveira',
      role: 'Noiva',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'A maquiadora entendeu perfeitamente o que eu queria e criou um look lindo e duradouro. Foi uma experiência incrível!',
      event: 'Casamento'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      role: 'Cliente',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Serviço de excelência! Pontualidade, qualidade dos produtos e resultado final perfeito. Já indiquei para várias amigas.',
      event: 'Ensaio Fotográfico'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-matteblack">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-lg">Depoimentos</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-6">
            O que nossas clientes{' '}
            <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior recompensa. 
            Conheça alguns dos depoimentos que recebemos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-darkgray rounded-2xl p-6 h-full border border-gray-800 hover:border-gold/30 transition-all duration-300 hover-lift"
                >
                  {/* Quote icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-lightpink rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-matteblack" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client info */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-lightpink/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{testimonial.role}</p>
                    <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.event}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="swiper-button-prev !text-gold !w-12 !h-12 !mt-0 !-translate-y-1/2 !top-1/2 !left-0 !bg-matteblack/80 !rounded-full !border !border-gold/30 hover:!bg-gold/10 transition-all duration-300"></div>
          <div className="swiper-button-next !text-gold !w-12 !h-12 !mt-0 !-translate-y-1/2 !top-1/2 !right-0 !bg-matteblack/80 !rounded-full !border !border-gold/30 hover:!bg-gold/10 transition-all duration-300"></div>

          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !mt-8 !bottom-0"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">500+</div>
            <div className="text-gray-300">Clientes Satisfeitas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">98%</div>
            <div className="text-gray-300">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">5+</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #D4AF37;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Testimonials


