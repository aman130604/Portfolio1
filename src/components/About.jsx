import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { motion } from 'framer-motion'

function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about parallax-section" data-parallax-speed="0.12" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeInOut' }}
        >
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
              <span>Gaya, Bihar, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
