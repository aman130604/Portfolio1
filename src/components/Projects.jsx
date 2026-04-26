import { useScrollAnimation } from '../hooks/useScrollAnimation'
import WheelWingsImg from '../assets/WheelWings.png'
import SkyBotImg from '../assets/SkyBot.png'
import MovieManiaImg from '../assets/MovieMania.png'
import { motion } from 'framer-motion'

function Projects() {
  const ref = useScrollAnimation()
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        ease: 'easeInOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 34 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }

  const projects = [
    {
      id: 1,
      title: "WheelWings - Tour Managing Platform",
      description: "A full-featured Tour Managing Website enabling users to explore destination, manage bookings and view personalized itineraries with 25% speed improvement.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      date: "Nov 2025 - Dec 2025",
      link: "https://travel-planner123.netlify.app/",
      category: "Full Stack",
      image: WheelWingsImg,
      features: ["Destination Explorer", "Booking Management", "Real-time Dashboard", "Payment Integration"]
    },
    {
      id: 2,
      title: "SkyBot - Airport Navigation Chatbot",
      description: "Developed a smart airport navigation chatbot using Gemini API to guide travelers through gates, terminals and airport facilities with real-time query handling.",
      technologies: ["JavaScript", "Gemini API", "HTML/CSS"],
      date: "Apr 2025 - May 2025",
      link: "https://github.com/aman130604",
      category: "AI/Chatbot",
      image: SkyBotImg,
      features: ["AI-Powered Chat", "Gate Navigation", "Terminal Info", "Facility Locator"]
    },
    {
      id: 3,
      title: "Moving Ticket Booking System",
      description: "Web-based theatre ticket booking system with 2D array-based seat management, dynamic pricing, and real-time UI synchronization using JavaScript DOM manipulation.",
      technologies: ["JavaScript", "HTML/CSS", "Data Structures"],
      date: "Apr 2025 - May 2025",
      link: "moviemania69.netlify.app",
      category: "Frontend",
      image: MovieManiaImg,
      features: ["Seat Selection", "Dynamic Pricing", "Cart System", "Booking Confirmation"]
    }
  ]

  return (
    <section id="projects" className="projects parallax-section" data-parallax-speed="0.2" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Innovative solutions crafted with passion and cutting-edge technologies</p>
        </div>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card fade-in"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.01,
                rotateX: 2.5,
                rotateY: -2.5,
                transition: { duration: 0.25, ease: 'easeInOut' }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="project-showcase">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
