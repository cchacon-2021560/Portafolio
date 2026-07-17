import { motion } from 'framer-motion'
import { FaGithub, FaUpRightFromSquare, FaImage, FaCode } from 'react-icons/fa6'

const projects = [
  {
    title: 'Park Point Solutions',
    description: 'Sistema de gestión para parqueaderos con funcionalidades de control de acceso y facturación.',
    github: '#',
    demo: '#',
  },
  {
    title: 'CyberVault',
    description: 'Sistema de gestión gestión bancaria con encriptación de extremo a extremo.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Buen Provecho',
    description: 'Sistema de gestión para restaurantes con funcionalidades de reservas y gestión de inventario.',
    github: '#',
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
              className="glass-card overflow-hidden group"
            >
              <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                <FaImage size={40} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaImage size={12} />
                    Interfaz
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaCode size={12} />
                    Código
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
