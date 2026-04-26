import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'services', 'achievements', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '-20% 0px -45% 0px'
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/MockInterviewCV.pdf'
    link.download = 'Aman_Verma_CV.pdf'
    link.click()
  }

  return (
    <div className="portfolio dark-theme">
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        downloadCV={downloadCV}
      />
      <Hero scrollToSection={scrollToSection} downloadCV={downloadCV} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
