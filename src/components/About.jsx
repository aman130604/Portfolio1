import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about parallax-section" data-parallax-speed="0.12" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text-section">
            <p className="about-text">
              I'm a passionate Full Stack Developer and Computer Science student at Lovely Professional University. 
              With a strong foundation in Data Structures and Algorithms, I love building intuitive and high-performance web applications.
            </p>
            <p className="about-text">
              My journey in tech started with exploring problem-solving through coding competitions, and now I focus on creating 
              real-world solutions that make a difference. I'm proficient in modern web technologies including React, Node.js, and MongoDB.
            </p>
            <div className="about-location">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Patna, Bihar, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
