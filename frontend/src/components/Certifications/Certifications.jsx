import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa6'
import useLanguage from '../../hooks/useLanguage'

const diplomaImages = [
  '/diploma-1.jpg',
  '/diploma-2.jpg',
]

export default function Certifications() {
  const { t } = useLanguage()
  const items = t('certifications.items')

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          {t('certifications.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-white/5 flex items-center justify-center overflow-hidden">
                <img
                  src={diplomaImages[i]}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden items-center justify-center w-full h-full">
                  <FaAward size={48} className="text-gray-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
