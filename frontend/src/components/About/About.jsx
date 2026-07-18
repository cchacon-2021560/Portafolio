import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaMapPin, FaEnvelope } from 'react-icons/fa6'

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
          Sobre mi
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Narrativa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Soy estudiante de <span className="text-cyan-400 font-medium">Informatica</span> en el
              Centro Educativo Tecnico Laboral Kinal, con enfoque en el desarrollo de aplicaciones web.
              Me interesa construir soluciones funcionales que resuelvan problemas reales.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Actualmente estoy en mi ultimo ano de diversificado, donde he desarrollado proyectos
              como sistemas de gestion bancaria, plataformas de restaurantes y soluciones para
              parqueaderos. Cada proyecto me ha permitido aprender sobre arquitectura de software,
              bases de datos y trabajo en equipo.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mi objetivo es insertarme en el ambito laboral como desarrollador, seguir creciendo
              tecnicamente y aportar valor al equipo que me reciba.
            </p>
          </motion.div>

          {/* Datos personales */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Datos personales</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaUser size={14} className="text-cyan-400/60 shrink-0" />
                Carlos Daniel Chacon Duarte
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaMapPin size={14} className="text-cyan-400/60 shrink-0" />
                Guatemala
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope size={14} className="text-cyan-400/60 shrink-0" />
                carloscdcd817@gmail.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaGraduationCap size={14} className="text-cyan-400/60 shrink-0" />
                Kinal — Informatica (6to Diversificado)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
