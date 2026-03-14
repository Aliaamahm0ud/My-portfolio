import React from 'react';
import educationImg from '../assets/images/beni.jpg';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="education-section py-5">
      <div className="container">

        {/* button مع لوجو التعليم */}
        <div className="row mb-4">
          <div className="col-12">
            <button className="education-btn">
              <span className="btn-content">
                <svg className="education-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7L12 2L22 7L12 12L2 7Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
                Education
              </span>
            </button>
          </div>
        </div>

        {/* بطاقة التعليم مع التسلسل الهرمي */}
        <div className="education-card">
          <div className="row align-items-center">
            
            {/* النص على الشمال */}
            <div className="col-md-6 text-start">
              {/* اسم الكلية الرئيسي */}
              <h2 className="faculty-name">
                Faculty of Navigation Science
                <span className="specialization d-block">and Space Technology</span>
              </h2>
              
              {/* تفاصيل الجامعة مع أيقونات */}
              <div className="university-details mt-4">
                <p className="detail-item">
                  <MapPin className="detail-icon" size={25} />
                  <span className="detail-text">Beni Suef University</span>
                </p>
                
                <p className="detail-item">
                  <Calendar className="detail-icon" size={25} />
                  <span className="detail-text">2021 - 2026</span>
                </p>
                
                <p className="detail-item">
                  <Award className="detail-icon" size={25} />
                  <span className="detail-text">Bachelor's Degree in Navigation Science</span>
                </p>
              </div>
            </div>

            {/* اللوجو على اليمين */}
            <div className="col-md-6 text-end">
              <div className="university-logo">
                <img 
                  src={educationImg} 
                  alt="Beni Suef University Logo"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;