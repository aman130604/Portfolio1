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
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    document.body.classList.toggle('dark-theme-body', isDarkMode)

    return () => {
      document.body.classList.remove('dark-theme-body')
    }
  }, [isDarkMode])

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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={`portfolio ${isDarkMode ? 'dark-theme' : ''}`}>
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        downloadCV={downloadCV}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
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
