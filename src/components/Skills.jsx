import React from 'react';


const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: 'HTML',
      icon: 'fa-brands fa-html5',
      description: 'HTML5 semantic elements, forms, and best practices for modern web development.',
      color: '#e44d26'
    },
    {
      id: 2,
      name: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      description: 'Advanced CSS3, Flexbox, Grid, animations, and responsive design techniques.',
      color: '#1572b6'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
      description: 'ES6+, DOM manipulation, async programming, and modern JavaScript features.',
      color: '#f7df1e'
    },
    {
      id: 4,
      name: 'React',
      icon: 'fa-brands fa-react',
      description: 'Hooks, context API, Redux, and building interactive user interfaces.',
      color: '#61dafb'
    },
    {
      id: 5,
      name: 'Bootstrap',
      icon: 'fa-brands fa-bootstrap',
      description: 'Responsive layouts, components, and customizing Bootstrap themes.',
      color: '#7952b3'
    },
    {
      id: 6,
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
      description: 'Version control, branching strategies, and collaboration workflows.',
      color: '#f05032'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span> My Skills</span>
             <div className="title-underline"></div>
          </h2>
         
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map(skill => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon-wrapper" style={{ backgroundColor: `${skill.color}20` }}>
                <i className={skill.icon} style={{ color: skill.color }}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;