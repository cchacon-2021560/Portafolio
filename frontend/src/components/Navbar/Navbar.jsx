import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

const links = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Acerca de' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'resume', label: 'Currículum' },
  { id: 'portfolio', label: 'Portafolio' },
  { id: 'contact', label: 'Contacto' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map(l => document.getElementById(l.id))
      const scrollY = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(links[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">
          [Tu Iniciales]
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm transition-colors ${
                  active === link.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          {open ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-gray-950/95 backdrop-blur-md border-b border-white/10"
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
