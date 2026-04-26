import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Trophy, Star, Award, Certificate } from './Icons'
import { motion } from 'framer-motion'

function Achievements() {
  const ref = useScrollAnimation()
  const columnVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  const achievements = [
    {
  id: 1,
  title: "1st Position - Full Throttle (ADVITIYA'24)",
  description: "Secured 1st position in the 'Full Throttle' event at ADVITIYA'24, IIT Ropar, as part of team KYB, demonstrating strong teamwork, technical skills, and competitive problem-solving.",
  Icon: Trophy,
  certificateImage: "https://drive.google.com/file/d/1puYyVPc51OnVBmAmvD3SsVrD-tXIzFib/view?usp=drive_link"
},
    {
      id: 2,
      title: "5-Star C++ badge on HackerRank",
      description: "Achieved 5-Star rating in C++ on HackerRank platform, showcasing competitive programming expertise",
      Icon: Star,
      profileLink: "https://www.hackerrank.com/profile/amanverma130604"
    },
    {
      id: 3,
      title: "5 star Problem Solving badge on HackerRank",
      description: "Earned the prestigious 5-star Problem Solving badge on HackerRank, demonstrating advanced problem-solving skills and consistent performance in coding challenges.",
      Icon: Star,
      profileLink: "https://www.hackerrank.com/profile/amanverma130604"
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Cloud Computing",
      provider: "NPTEL",
      date: "Oct 2025",
      link: "https://drive.google.com/file/d/1NL28-46DsT0sasnZFqSlQ8TMSwJTu9vC/view?usp=drive_link"
    },
    {
      id: 2,
      title: "ChatGPT Prompt: All Essentials for Beginners",
      provider: "Infosys",
      date: "Sep 2025",
      link: "https://drive.google.com/file/d/1P7huQoqMUNYfQ0cw6LYZE-vk8Am-h2tV/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Build Generative AI Apps with No Code Tools",
      provider: "Infosys",
      date: "Sep 2025",
      link: "https://drive.google.com/file/d/1g84WiKoIspu2gTz5xGIl6lhtRuNjmtWD/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Data Structure and Algorithms",
      provider: "LPU",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1RIMwjSaKfha0ugzBEwdkZd6dSwO8D9Gj/view?usp=drive_link"
    }
  ]

  return (
    <section id="achievements" className="achievements parallax-section" data-parallax-speed="0.1" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle">Recognition and credentials that demonstrate my expertise</p>
        </div>
        
        <div className="achievements-wrapper">
          <div className="achievements-section">
            <div className="subsection-header">
              <Award />
              <h3 className="subsection-title">Achievements</h3>
            </div>
            <motion.div
              className="achievements-list"
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="achievement-item fade-in"
                  variants={itemVariants}
                  transition={{ delay: index * 0.08, ease: 'easeInOut' }}
                >
                  <div className="achievement-icon-wrapper">
                    <item.Icon />
                  </div>
                  <div className="achievement-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    {item.certificateImage && (
                      <a
                        href={item.certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-btn"
                      >
                        View Certificate
                      </a>
                    )}
                    {item.profileLink && (
                      <a
                        href={item.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-btn"
                      >
                        View Profile
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="certifications-section">
            <div className="subsection-header">
              <Certificate />
              <h3 className="subsection-title">Certifications</h3>
            </div>
            <motion.div
              className="certifications-list"
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certification-item fade-in"
                  variants={itemVariants}
                  transition={{ delay: index * 0.08, ease: 'easeInOut' }}
                >
                  <div className="certification-number">{cert.id}</div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-provider">{cert.provider}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link-btn"
                    >
                      View Certification
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
