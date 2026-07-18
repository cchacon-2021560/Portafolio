import { motion } from 'framer-motion'
import { FaJava, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa6'

const skills = [
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'MySQL', icon: <FaDatabase size={40} /> },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Habilidades
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 glass-card px-8 py-6 cursor-default"
            >
              <div className="text-gray-300">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
