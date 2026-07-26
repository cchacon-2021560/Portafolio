import { LanguageProvider } from './hooks/useLanguage'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Resume from './components/Resume/Resume'
import Certifications from './components/Certifications/Certifications'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import useLanguage from './hooks/useLanguage'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Chacon. {t('footer.rights')}
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{t('footer.home')}</a>
          <a href="#about" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{t('footer.about')}</a>
          <a href="#portfolio" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{t('footer.portfolio')}</a>
          <a href="#contact" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-orbs" />
      <div className="orb-extra-1" />
      <div className="orb-extra-2" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Resume />
          <Certifications />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
