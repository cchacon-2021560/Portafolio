import { motion } from 'framer-motion'
import { FaUser, FaTarget, FaGraduationCap } from 'react-icons/fa6'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Acerca de Mí
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaUser className="text-cyan-400" size={28} />,
              title: 'Datos Personales',
              items: ['Nombre: [Tu Nombre]', 'Ubicación: [Tu Ciudad]', 'Email: [tu@email.com]'],
            },
            {
              icon: <FaTarget className="text-cyan-400" size={28} />,
              title: 'Metas Profesionales',
              items: ['[Meta 1: Ejemplo]', '[Meta 2: Ejemplo]', '[Meta 3: Ejemplo]'],
            },
            {
              icon: <FaGraduationCap className="text-cyan-400" size={28} />,
              title: 'Formación',
              items: ['[Institución]', '[Carrera / Programa]', '[Año de egreso]'],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map(item => (
                  <li key={item} className="text-gray-400 text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
