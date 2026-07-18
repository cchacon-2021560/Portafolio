import { motion } from 'framer-motion'
import { FaUser, FaBullseye, FaGraduationCap } from 'react-icons/fa6'

const cards = [
  {
    icon: <FaUser className="text-cyan-400" size={28} />,
    title: 'Datos Personales',
    items: ['Nombre: Carlos Daniel Chacon Duarte', 'Ubicacion: Guatemala', 'Email: carloscdcd817@gmail.com'],
    direction: { x: -40 },
  },
  {
    icon: <FaBullseye className="text-cyan-400" size={28} />,
    title: 'Metas Profesionales',
    items: ['Insercion Laboral', 'Especializacion Tecnica', 'Buenas Practicas'],
    direction: { y: 40 },
  },
  {
    icon: <FaGraduationCap className="text-cyan-400" size={28} />,
    title: 'Formacion',
    items: ['Centro Educativo Tecnico Laboral Kinal', 'Informatica', 'Sexto Diversificado'],
    direction: { x: 40 },
  },
]

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
          Acerca de Mi
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, ...card.direction }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
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
