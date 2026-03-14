import React from 'react';


const Footer = () => {
  return (
    <section id="thankyou" className="thankyou-section">
      <div className="container">
        <div className="thankyou-content">
          {/* أيقونة أو شكل */}
          <div className="thankyou-icon">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>

          {/* Thank You text */}
          <h1 className="thankyou-title">
             <span> Thank You</span>
          </h1>

          

          {/* Back to top button */}
          <a href="#home" className="back-to-top">
            <i className="fa-solid fa-arrow-up"></i>
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;