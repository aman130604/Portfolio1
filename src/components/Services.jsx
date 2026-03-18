import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Globe, Cpu, Database, Plug, Palette, Zap } from './Icons'

function Services() {
  const ref = useScrollAnimation()
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive web applications using React.js, Node.js, and cutting-edge technologies.",
      Icon: Globe
    },
    {
      id: 2,
      title: "Full Stack Solutions",
      description: "End-to-end development covering frontend, backend APIs, and database design.",
      Icon: Cpu
    },
    {
      id: 3,
      title: "Database Design",
      description: "Efficient database schemas using MongoDB, MySQL, and other technologies.",
      Icon: Database
    },
    {
      id: 4,
      title: "API Development",
      description: "RESTful APIs and backend services using Node.js and Express.",
      Icon: Plug
    },
    {
      id: 5,
      title: "UI/UX Implementation",
      description: "Interactive, user-friendly interfaces with smooth animations and responsive layouts.",
      Icon: Palette
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Speed and efficiency through code splitting, lazy loading, and runtime optimization.",
      Icon: Zap
    }
  ]

  return (
    <section id="services" className="services parallax-section" data-parallax-speed="0.13" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">Comprehensive web development services tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-icon-wrapper">
                <service.Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
