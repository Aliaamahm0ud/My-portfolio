import React from 'react';


const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: 'fa-solid fa-code',
      mainDesc: 'Building modern and responsive web applications',
      details: [
        'Single Page Applications (SPA) using React.js',
        'Interactive user interfaces with modern JavaScript (ES6+)',
        'State management (Context API, Redux)',
        'Integration with RESTful APIs',
        'Performance optimization and code splitting'
      ],
      color: '#6c5ce7'
    },
    {
      id: 2,
      title: 'Web Design & UI/UX',
      icon: 'fa-solid fa-paint-brush',
      mainDesc: 'Creating beautiful and user-friendly interfaces',
      details: [
        'Convert Figma/Adobe XD designs into pixel-perfect code',
        'Responsive designs that work on all devices',
        'Interactive prototypes and animations',
        'User experience optimization',
        'Cross-browser compatibility'
      ],
      color: '#6c5ce7'
    },
    {
      id: 3,
      title: 'Responsive Design',
      icon: 'fa-solid fa-mobile-screen',
      mainDesc: 'Websites that work perfectly on all devices',
      details: [
        'Mobile-first approach for better performance',
        'Flexible layouts using CSS Grid and Flexbox',
        'Optimized images and media queries',
        'Touch-friendly interfaces for mobile users',
        'Testing on multiple devices and screen sizes'
      ],
      color: '#6c5ce7'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
           <span> My Services</span>
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-main-desc">{service.mainDesc}</p>
              
              <div className="service-details">
                <h4>What I offer:</h4>
                <ul className="service-list">
                  {service.details.map((item, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-circle-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;