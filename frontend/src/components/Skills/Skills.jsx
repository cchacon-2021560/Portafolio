import { motion } from 'framer-motion'
import { FaJava, FaNodeJs, FaReact, FaAngular, FaDatabase } from 'react-icons/fa6'

const skills = [
  { name: 'Java', icon: <FaJava size={36} />, level: 80, color: 'from-orange-500 to-red-600' },
  { name: 'Node.js', icon: <FaNodeJs size={36} />, level: 75, color: 'from-green-500 to-green-700' },
  { name: 'React', icon: <FaReact size={36} />, level: 85, color: 'from-cyan-400 to-blue-500' },
  { name: 'Angular', icon: <FaAngular size={36} />, level: 70, color: 'from-red-500 to-red-700' },
  { name: 'MySQL', icon: <FaDatabase size={36} />, level: 75, color: 'from-blue-400 to-blue-600' },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-gray-300">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>

              <div className="w-full bg-white/5 rounded-full h-2.5 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="text-xs text-gray-500 text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
