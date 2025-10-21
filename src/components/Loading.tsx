import React from 'react'
import { motion } from 'framer-motion'

const Loading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-matteblack flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-20 h-20 bg-gradient-to-br from-gold to-lightpink rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <span className="text-2xl font-bold text-matteblack">S</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl font-serif font-bold gradient-text mb-4"
        >
          SterMakeUp
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="w-3 h-3 bg-gold rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-gray-400 mt-4"
        >
          Carregando beleza...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loading


