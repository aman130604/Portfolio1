import { useState, useEffect } from 'react'

function Navigation({ activeSection, scrollToSection, downloadCV, isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">AV</div>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          <li>
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle dark mode">
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </li>
          <li><button className="cv-btn" onClick={downloadCV}>Download CV</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
