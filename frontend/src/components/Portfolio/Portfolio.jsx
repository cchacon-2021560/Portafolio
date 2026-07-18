import { motion } from 'framer-motion'
import { FaGithub, FaUpRightFromSquare, FaImage, FaCode } from 'react-icons/fa6'

const projects = [
  {
    title: 'Park Point Solutions',
    description: 'Sistema de gestion para parqueaderos con funcionalidades de control de acceso y facturacion.',
    github: ' ',
    demo: '#',
  },
  {
    title: 'CyberVault',
    description: 'Sistema de gestion bancaria con encriptacion de extremo a extremo.',
    github: 'https://github.com/ocumatz-2021660/Sistema_Bancario',
    demo: 'https://sistema-bancario-bay.vercel.app?_vercel_share=gMVgp6E9Iw8UhUKIJFaZNqMNO0DkiCFb',
  },
  {
    title: 'Buen Provecho',
    description: 'Sistema de gestion para restaurantes con funcionalidades de reservas y gestion de inventario.',
    github: 'https://github.com/iperez-2024003/Gestion-Restaurantes',
    demo: '#',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Portafolio de Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group card-shine"
            >
              <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                <FaImage size={40} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaImage size={12} />
                    Interfaz
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaCode size={12} />
                    Codigo
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaUpRightFromSquare /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
