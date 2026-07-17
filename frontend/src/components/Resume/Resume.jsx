import { motion } from 'framer-motion'
import {
  FaUser,
  FaGraduationCap,
  FaCertificate,
  FaStar,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaCalendarDays,
} from 'react-icons/fa6'

const personalData = {
  name: 'Carlos Daniel Chacón Duarte',
  phone: '5880-9110',
  email: 'carloscdcd817@gmail.com',
  location: 'Guatemala, Guatemala',
  age: '18 años',
}

const education = [
  {
    institution: 'Centro Educativo Técnico Laboral Kinal',
    period: '2024 – Actualidad',
    degree: 'Diversificado en Informática',
  },
  {
    institution: 'Centro Educativo Técnico Laboral Kinal',
    period: '2021 – 2023',
    degree: 'Básico',
  },
]

const certifications = [
  {
    name: 'Reconocimiento por Excelencia Académica',
    issuer: 'Banco Industrial',
    date: 'Junio 2025',
    url: 'https://www.credly.com/badges/6726271c-2e0d-42ea-9833-2c3947ad40d0/linked_profile',
  },
  {
    name: 'Reconocimiento por Excelencia Académica',
    issuer: 'Banco Industrial',
    date: 'Junio 2026',
    url: 'https://www.credly.com/badges/07253691-7789-48a1-98a6-2087f480b402/linked_profile',
  },
]

const competencies = [
  'Trabajo en equipo',
  'Responsabilidad',
  'Actitud positiva',
  'Liderazgo',
  'Compromiso',
  'Capacidad de adaptación',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center"
          >
            Currículum Virtual
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/CV_Carlos_Chacón.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-400 text-cyan-400 rounded-xl text-sm font-medium hover:bg-cyan-400/10 transition-colors"
          >
            <FaDownload size={14} />
            Descargar CV
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Datos Personales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaUser className="text-cyan-400" size={22} />
              <h3 className="text-lg font-semibold text-white">Datos Personales</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaUser size={14} className="text-cyan-400/60" />
                {personalData.name}
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope size={14} className="text-cyan-400/60" />
                {personalData.email}
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone size={14} className="text-cyan-400/60" />
                {personalData.phone}
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaLocationDot size={14} className="text-cyan-400/60" />
                {personalData.location}
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaCalendarDays size={14} className="text-cyan-400/60" />
                {personalData.age}
              </li>
            </ul>
          </motion.div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaGraduationCap className="text-cyan-400" size={22} />
              <h3 className="text-lg font-semibold text-white">Educación</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-cyan-400/30 pl-4">
                  <h4 className="text-white text-sm font-medium">{edu.institution}</h4>
                  <p className="text-cyan-400 text-xs mt-0.5">{edu.degree}</p>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                    <FaCalendarDays size={10} />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reconocimientos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaCertificate className="text-cyan-400" size={22} />
              <h3 className="text-lg font-semibold text-white">Reconocimientos</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <FaCertificate size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-medium">{cert.name}</h4>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Competencias Personales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaStar className="text-cyan-400" size={22} />
              <h3 className="text-lg font-semibold text-white">Competencias Personales</h3>
            </div>
            <ul className="space-y-3">
              {competencies.map((comp, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span className="text-gray-400 text-sm">{comp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}