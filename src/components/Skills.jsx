import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useScrollAnimation()

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const getIconForCategory = (title) => {
    switch(title) {
      case "Programming":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        )
      case "Frontend":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        )
      case "Backend":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="7" x2="22" y2="7"></line>
            <line x1="2" y1="17" x2="22" y2="17"></line>
          </svg>
        )
      case "Tools & Platforms":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        )
      case "Soft Skills":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      default:
        return null
    }
  }

  const skillCategories = [
    {
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C++", percentage: 85 },
        { name: "JavaScript", percentage: 88 },
        { name: "C", percentage: 80 },
        { name: "PHP", percentage: 82 }
      ]
    },
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", percentage: 85 },
        { name: "HTML5", percentage: 90 },
        { name: "CSS3", percentage: 90 }
      ]
    },
    {
      title: "Backend",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "MongoDB", percentage: 82 },
        { name: "MySQL", percentage: 78 },
       
        {name: "Laravel", percentage: 70}
      ]
    },
    {
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", percentage: 85 },
        { name: "Vite", percentage: 82 },
        { name: "VS Code", percentage: 90 },
        {name : "Firebase", percentage: 80}
      ]
    },
    {
      title: "Soft Skills",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Strategic Problem Resolution", percentage: 88 },
        { name: "Effective Communication & Articulation", percentage: 85 },
        { name: "Team Synergy & Coordination", percentage: 87 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills parallax-section" data-parallax-speed="0.16" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Master of languages, frameworks, and tools</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-category-header">
                <div className={`category-icon gradient-${category.color.split('-')[1]}`}>
                  {getIconForCategory(category.title)}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: animate ? `${skill.percentage}%` : '0%',
                          transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

/*
 Button styling could be: gradient-blue, gradient-purple, gradient-emerald, gradient-orange, gradient-indigo
*/

