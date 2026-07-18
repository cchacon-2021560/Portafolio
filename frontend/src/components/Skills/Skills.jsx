import { motion } from 'framer-motion'
import { FaJava, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa6'
import useLanguage from '../../hooks/useLanguage'

const skillIcons = [
  { key: 'Java', icon: <FaJava size={40} /> },
  { key: 'Node.js', icon: <FaNodeJs size={40} /> },
  { key: 'React', icon: <FaReact size={40} /> },
  { key: 'MySQL', icon: <FaDatabase size={40} /> },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skillIcons.map((skill, i) => (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 glass-card px-8 py-6 cursor-default"
            >
              <div className="text-gray-300">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-300">{skill.key}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
