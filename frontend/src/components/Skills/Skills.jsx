import { motion } from 'framer-motion'
import { FaJava, FaSquareJs, FaReact, FaGithub } from 'react-icons/fa6'
import { SiSpringboot, SiExpress, SiBootstrap, SiVite, SiDotnet, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import useLanguage from '../../hooks/useLanguage'

const SKILLS = [
  {
    category: 'skills.categories.languages',
    items: [
      { name: 'Java', level: 'intermediate', icon: FaJava },
      { name: 'JavaScript', level: 'intermediate', icon: FaSquareJs },
      { name: 'C#', level: 'basic', icon: TbBrandCSharp },
    ]
  },
  {
    category: 'skills.categories.frameworks',
    items: [
      { name: 'React', level: 'intermediate', icon: FaReact },
      { name: 'Spring Boot', level: 'basic', icon: SiSpringboot },
      { name: 'Express', level: 'intermediate', icon: SiExpress },
      { name: 'Bootstrap', level: 'intermediate', icon: SiBootstrap },
      { name: 'Vite', level: 'intermediate', icon: SiVite },
      { name: '.NET', level: 'basic', icon: SiDotnet },
    ]
  },
  {
    category: 'skills.categories.databaseDevops',
    items: [
      { name: 'MongoDB', level: 'intermediate', icon: SiMongodb },
      { name: 'MySQL', level: 'intermediate', icon: SiMysql },
      { name: 'PostgreSQL', level: 'basic', icon: SiPostgresql },
      { name: 'GitHub', level: 'intermediate', icon: FaGithub },
    ]
  }
]

const levelStyles = {
  basic: 'bg-white/5 text-gray-400 border border-white/10',
  intermediate: 'bg-cyan-950/50 text-cyan-300 border border-cyan-800/30',
  advanced: 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/30',
}

export default function Skills() {
  const { t } = useLanguage()

  let globalIndex = 0

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

        <div className="space-y-12">
          {SKILLS.map((group) => {
            const categoryIndex = globalIndex
            return (
              <div key={group.category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="text-lg font-semibold text-cyan-400 mb-2"
                >
                  {t(group.category)}
                </motion.h3>
                <div className="border-b border-white/10 pb-4 mb-6" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {group.items.map((item) => {
                    globalIndex++
                    const Icon = item.icon
                    const delay = globalIndex * 0.05
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.4 }}
                        whileHover={{ y: -6, scale: 1.05 }}
                        className="flex flex-col items-center gap-3 glass-card px-6 py-5 cursor-default"
                      >
                        <div className="text-gray-300">
                          <Icon size={40} />
                        </div>
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${levelStyles[item.level]}`}>
                          {t(`skills.levels.${item.level}`)}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

