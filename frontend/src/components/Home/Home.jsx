import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa6'

export default function Home() {
  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-400 text-sm uppercase tracking-widest mb-4"
        >
          Bienvenido a mi portafolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Carlos Chacón
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-10"
        >
          Construyendo aplicaciones web eficientes, escalables y centradas en el usuario.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
        >
          Contáctame
          <FaArrowDown className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
