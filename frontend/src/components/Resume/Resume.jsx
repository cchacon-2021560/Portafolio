import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar } from 'react-icons/fa6'

const timeline = [
  {
    title: '[Título del Puesto]',
    company: '[Nombre de Empresa]',
    period: '[Fecha inicio] – [Fecha fin]',
    description: '[Descripción de tus responsabilidades y logros]',
  },
  {
    title: '[Título del Puesto]',
    company: '[Nombre de Empresa]',
    period: '[Fecha inicio] – [Fecha fin]',
    description: '[Descripción de tus responsabilidades y logros]',
  },
  {
    title: '[Título del Puesto]',
    company: '[Nombre de Empresa]',
    period: '[Fecha inicio] – [Fecha fin]',
    description: '[Descripción de tus responsabilidades y logros]',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Currículum Virtual
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
                  <FaBriefcase size={10} className="text-cyan-400" />
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{item.company}</p>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                    <FaCalendar size={12} />
                    {item.period}
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
