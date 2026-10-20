import Nav from './components/Nav'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Experience from './components/Experience'
import Work from './components/Work'
import Earlier from './components/Earlier'
import Workflow from './components/Workflow'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="grain">
      <a href="#experience" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Experience />
        <Work />
        <Workflow />
        <Skills />
        <About />
        <Earlier />
      </main>
      <Contact />
    </div>
  )
}
