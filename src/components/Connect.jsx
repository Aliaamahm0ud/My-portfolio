import React from 'react';
import contactImg from '../assets/images/contact-img.svg'


const Connect = () => {
    return (
        <section id="connect">
            <div className="connect-section container">
                <div className="row justify-content-center mx-auto align-items-center">
                    <div className="contact-img col-11 col-lg-6">
                        <img src={contactImg} alt="contact img" />
                    </div>
                    <div className="connect-content col-11 col-lg-6">
                        <h2 className="connect-title w-100 text-center text-lg-start">Get In Touch</h2>
                        
                        {/* لينكات التواصل بدل الفورم */}
                        <div className="social-connect">
                            
                            
                            <div className="social-links-container">
                                <a href="https://github.com/Aliaamahm0ud" target="_blank" rel="noopener noreferrer" className="social-link github">
                                    <div className="social-icon-wrapper">
                                        <i className="fa-brands fa-github"></i>
                                    </div>
                                    <div className="social-info">
                                        <span className="social-platform">GitHub</span>
                                        <span className="social-handle">https://github.com/Aliaamahm0ud</span>
                                    </div>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/aliaamahmoud/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                    <div className="social-icon-wrapper">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="social-info">
                                        <span className="social-platform">LinkedIn</span>
                                        <span className="social-handle">https://www.linkedin.com/in/aliaamahmoud/</span>
                                    </div>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                                <a href="aliaamahmoud242@gmail.com" className="social-link email">
                                    <div className="social-icon-wrapper">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="social-info">
                                        <span className="social-platform">Email</span>
                                        <span className="social-handle">aliaamahmoud242@gmail.com</span>
                                    </div>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Connect);