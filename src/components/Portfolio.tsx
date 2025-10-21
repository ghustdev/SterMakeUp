import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Portfolio: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const portfolioImages = [
    {
      id: 1,
      title: 'Noiva Clássica',
      category: 'Casamentos',
      description: 'Look elegante e atemporal para o grande dia',
      image: '/api/placeholder/400/500'
    },
    {
      id: 2,
      title: 'Make Glamour',
      category: 'Eventos',
      description: 'Maquiagem sofisticada para festas especiais',
      image: '/api/placeholder/400/500'
    },
    {
      id: 3,
      title: 'Natural Beauty',
      category: 'Dia a Dia',
      description: 'Beleza natural e radiante',
      image: '/api/placeholder/400/500'
    },
    {
      id: 4,
      title: 'Editorial Fashion',
      category: 'Produção',
      description: 'Maquiagem artística para ensaios fotográficos',
      image: '/api/placeholder/400/500'
    },
    {
      id: 5,
      title: 'Noiva Moderna',
      category: 'Casamentos',
      description: 'Tendências atuais para noivas contemporâneas',
      image: '/api/placeholder/400/500'
    },
    {
      id: 6,
      title: 'Glamour Night',
      category: 'Eventos',
      description: 'Look marcante para noites especiais',
      image: '/api/placeholder/400/500'
    }
  ]

  const categories = ['Todos', 'Casamentos', 'Eventos', 'Dia a Dia', 'Produção']
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredImages = activeCategory === 'Todos' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="portfolio" className="section-padding bg-darkgray">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-lg">Portfólio</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Nossos trabalhos{' '}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cada trabalho é único e executado com paixão. Conheça alguns dos nossos 
            projetos mais recentes e inspire-se para o seu próximo evento.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-matteblack'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/5]">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-lightpink/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-lightpink rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-white/80 text-sm">{item.title}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matteblack/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <span className="inline-block bg-gold text-matteblack px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-matteblack/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-matteblack/50 rounded-full flex items-center justify-center text-white hover:bg-matteblack/80 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-matteblack/50 rounded-full flex items-center justify-center text-white hover:bg-matteblack/80 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-matteblack/50 rounded-full flex items-center justify-center text-white hover:bg-matteblack/80 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image content */}
                <div className="bg-darkgray rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-lightpink/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-gold to-lightpink rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">📸</span>
                      </div>
                      <p className="text-white/80 text-lg">Imagem do Portfólio</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {filteredImages[selectedImage]?.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {filteredImages[selectedImage]?.description}
                    </p>
                    <span className="inline-block bg-gold text-matteblack px-4 py-2 rounded-full font-medium">
                      {filteredImages[selectedImage]?.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio


