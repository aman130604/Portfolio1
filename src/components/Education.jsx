import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Education() {
  const ref = useScrollAnimation()
  const education = [
    {
      id: 1,
      degree: "B.Tech Computer Science Engineering",
      school: "Lovely Professional University",
      duration: "Aug 2023 - Present",
      gpa: "CGPA: 7.7",
      location: "Punjab, India",
      description: "Strong foundation in Data Structures, Algorithms, and modern web technologies"
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      school: "Sunshine Residential Public School",
      duration: "Apr 2021 - Mar 2022",
      percentage: "74%",
      location: "Bihar, India",
      description: "Focused on Science and Mathematics"
    },
    {
      id: 3,
      degree: "Matriculation (10th Grade)",
      school: "Manav Bharti National School",
      duration: "Apr 2019 - Mar 2020",
      percentage: "86.40%",
      location: "Bihar, India",
      description: "Strong academic performance with excellence in STEM subjects"
    }
  ]

  return (
    <section id="education" className="education parallax-section" data-parallax-speed="0.14" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic journey and qualifications</p>
        </div>
        
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={item.id} className="education-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="education-marker">
                <div className="marker-dot"></div>
                {index < education.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="education-card">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-school">{item.school}</p>
                  </div>
                  <div className="education-meta">
                    <span className="education-duration">{item.duration}</span>
                    <span className="education-score">
                      {item.gpa || item.percentage}
                    </span>
                  </div>
                </div>
                
                <div className="education-body">
                  <p className="education-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </p>
                  <p className="education-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
