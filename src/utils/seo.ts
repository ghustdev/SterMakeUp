// SEO Configuration for SterMakeUp
export const SEO_CONFIG = {
  title: 'SterMakeUp - Beleza que inspira confiança',
  description: 'Serviços profissionais de maquiagem para noivas, eventos e produção. Transforme cada momento com a SterMakeUp.',
  keywords: [
    'maquiagem',
    'maquiadora',
    'noiva',
    'eventos',
    'produção',
    'beleza',
    'makeup',
    'casamento',
    'fotos',
    'sessão fotográfica'
  ],
  author: 'SterMakeUp',
  url: 'https://stermakeup.com',
  image: '/og-image.jpg',
  type: 'website',
  locale: 'pt_BR',
  siteName: 'SterMakeUp'
}

// Meta tags for different pages
export const getPageSEO = (page: string) => {
  const baseSEO = {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    keywords: SEO_CONFIG.keywords.join(', '),
    author: SEO_CONFIG.author,
    url: SEO_CONFIG.url,
    image: SEO_CONFIG.image,
    type: SEO_CONFIG.type,
    locale: SEO_CONFIG.locale,
    siteName: SEO_CONFIG.siteName
  }

  switch (page) {
    case 'home':
      return {
        ...baseSEO,
        title: 'SterMakeUp - Beleza que inspira confiança',
        description: 'Serviços profissionais de maquiagem para noivas, eventos e produção. Transforme cada momento com a SterMakeUp.'
      }
    case 'services':
      return {
        ...baseSEO,
        title: 'Serviços - SterMakeUp',
        description: 'Conheça nossos serviços de maquiagem profissional: noivas, eventos, fotos e dia a dia.'
      }
    case 'portfolio':
      return {
        ...baseSEO,
        title: 'Portfólio - SterMakeUp',
        description: 'Veja alguns dos nossos trabalhos mais recentes e inspire-se para o seu próximo evento.'
      }
    case 'contact':
      return {
        ...baseSEO,
        title: 'Contato - SterMakeUp',
        description: 'Entre em contato conosco para agendar uma consulta ou solicitar um orçamento.'
      }
    default:
      return baseSEO
  }
}

// Structured data for SEO
export const getStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SterMakeUp',
  description: 'Serviços profissionais de maquiagem para noivas, eventos e produção',
  url: 'https://stermakeup.com',
  telephone: '+55-11-99999-9999',
  email: 'contato@stermakeup.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  priceRange: '$$',
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505,
      longitude: -46.6333
    },
    geoRadius: '50000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Maquiagem',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maquiagem para Noivas',
          description: 'Look perfeito para o seu dia mais especial'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Produção para Eventos',
          description: 'Maquiagem profissional para festas e eventos especiais'
        }
      }
    ]
  }
})


