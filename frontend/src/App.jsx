import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App
