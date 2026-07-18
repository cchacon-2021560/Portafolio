import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Chacon. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Inicio</a>
          <a href="#about" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Acerca de</a>
          <a href="#portfolio" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Portafolio</a>
          <a href="#contact" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Dynamic background */}
      <div className="bg-orbs" />
      <div className="orb-extra-1" />
      <div className="orb-extra-2" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
