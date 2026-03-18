import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Phone, Linkedin, Github, Send, Check } from './Icons'

function Contact() {
  const ref = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }
    
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact parallax-section" data-parallax-speed="0.18" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss your next project</p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Reach out to me</h3>
            <p>I'm always open to new opportunities, collaborations, and interesting projects. Feel free to contact me anytime!</p>
            
            <div className="contact-methods">
              <a href="mailto:amanverma130604@gmail.com" className="contact-method">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">amanverma130604@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919523878059" className="contact-method">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+91-9523878059</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/aman-0w12" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">
                  <Linkedin />
                </div>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/aman-0w12</p>
                </div>
              </a>
              
              <a href="https://github.com/aman130604" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">
                  <Github />
                </div>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/aman130604</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              {submitted ? (
                <>
                  <Check /> Message Sent!
                </>
              ) : (
                <>
                  <Send /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
