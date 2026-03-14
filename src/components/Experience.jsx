import React from 'react';
const Experience = () => {
  const experiences = [
    {
      id: 1,
      organization: "Digital Egypt Pioneers Initiative",
      
      period: "Nov-2026 / Jun-2026",
      description: [
        "Intensive training in web development using modern technologies",
        "Working on practical projects with React and JavaScript",
        "Training in programming skills and problem-solving"
      ],
      type: "internship",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      id: 2,
      title: "Frontend Development Course",
      organization: "SEF Academy",
      period: "4 Months - 2024",
      description: [
        "In-depth study of HTML, CSS, and JavaScript",
        "Developed interactive projects and practical applications",
        "Trained in Responsive Design and Bootstrap"
      ],
      type: "course",
      icon: "fa-solid fa-code"
    },
    {
      id: 3,
      title: "Web Development Intensive Course",
      organization: "ITI (Information Technology Institute)",
      period: "1 Month - 2024",
      description: [
        "Intensive program in web development fundamentals",
        "Introduction to modern programming tools and techniques",
        "Practical implementation of complete web pages"
      ],
      type: "course",
      icon: "fa-solid fa-laptop-code"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
           <span> My Experience</span>
            <div className="title-underline"></div>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={exp.id}>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <i className={exp.icon}></i>
                </div>
                <div className="timeline-header">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-organization">{exp.organization}</h4>
                </div>
                <div className="timeline-body">
                  <ul className="timeline-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;