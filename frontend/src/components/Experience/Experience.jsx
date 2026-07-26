import { motion } from 'framer-motion'
import { FaBuilding } from 'react-icons/fa6'
import useLanguage from '../../hooks/useLanguage'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          {t('experience.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-6 relative overflow-hidden group card-shine">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 rounded-r" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <FaBuilding className="text-cyan-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {t('experience.role')}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">
                  {t('experience.company')}
                </p>
                <p className="text-gray-400 text-sm">
                  {t('experience.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
