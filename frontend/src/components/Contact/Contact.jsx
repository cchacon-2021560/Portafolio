import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaLinkedin, FaUpRightFromSquare } from 'react-icons/fa6'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-6"
        >
          Contacto
        </motion.h2>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="[Tu LinkedIn]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <FaLinkedin size={18} /> LinkedIn <FaUpRightFromSquare size={10} />
          </a>
          <a
            href="[Tu CompuTrabajo]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            CompuTrabajo <FaUpRightFromSquare size={10} />
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="[Tu Nombre]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="[tu@email.com]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Asunto</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              placeholder="[Asunto]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              placeholder="[Tu mensaje]"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium text-sm hover:bg-cyan-500/20 transition-colors disabled:opacity-50"
          >
            <FaPaperPlane />
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>

          {status === 'sent' && (
            <p className="text-green-400 text-sm text-center">Mensaje enviado correctamente.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">Error al enviar. Intenta de nuevo.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
