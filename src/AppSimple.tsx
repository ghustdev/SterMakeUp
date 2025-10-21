import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-matteblack text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-gold">SterMakeUp</span> - Beleza que inspira confiança
        </h1>
        
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            Serviços profissionais de maquiagem para noivas, eventos e produção.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gold mb-4">Maquiagem para Noivas</h2>
              <p className="text-gray-300">Look perfeito para o seu dia mais especial.</p>
            </div>
            
            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gold mb-4">Produção para Eventos</h2>
              <p className="text-gray-300">Maquiagem profissional para festas e eventos especiais.</p>
            </div>
            
            <div className="bg-darkgray p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gold mb-4">Maquiagem para Fotos</h2>
              <p className="text-gray-300">Maquiagem otimizada para câmeras e iluminação profissional.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-gold text-matteblack px-8 py-3 rounded-lg font-bold hover:bg-gold/80 transition-colors">
              Agendar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

