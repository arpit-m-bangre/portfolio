import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Experience     from './components/Experience'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Education      from './components/Education'
import Certifications from './components/Certifications'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import { BackgroundParticles } from './components/ui'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans relative overflow-hidden">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
