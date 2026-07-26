import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaXmark, FaGlobe } from 'react-icons/fa6'
import useLanguage from '../../hooks/useLanguage'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'resume', label: t('nav.resume') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    const sections = links.map(l => document.getElementById(l.id))
    const scrollY = window.scrollY + 100
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i] && sections[i].offsetTop <= scrollY) {
        setActive(links[i].id)
        break
      }
    }
  }, [links])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 shadow-lg shadow-black/20'
          : 'bg-gray-950/70'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">
          CDCD
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`text-sm transition-colors ${
                  active === link.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-cyan-400 transition-colors border border-white/10 rounded-full px-3 py-1.5"
          >
            <FaGlobe size={12} />
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {open ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-gray-950/95 border-b border-white/10"
        >
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm ${
                  active === link.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}
