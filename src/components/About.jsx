import React from 'react';
import pic from '../assets/images/photo_2026-03-14_02-25-24.jpg'


const About = () => {
  return (
    <section id= "about" className="about-section py-5">
      <div className="container py-5">

        {/* About Me فوق في النص */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold about-title">
            About Me
          </h1>
        </div>

        {/* الصورة والكلام جمب بعض */}
        <div className="row g-5 align-items-center">

          {/* عمود الصورة (شمال) */}
          <div className="col-lg-4">
            <div className="position-relative">
              <img
                src= {pic}
                alt="Developer working"
                className="img-fluid rounded-4 shadow-lg"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-4"
                style={{ transform: 'translate(20px, 20px)', zIndex: -1 }}
              ></div>
            </div>
          </div>

          {/* عمود النص (يمين) */}
          <div className="col-lg-8">
            <div className="about-content ">
              <p className="lead" style={{ lineHeight: 1.3, color: '#0e0b0b' , fontSize: '25px'}}>
                Since I was young, I've always loved computers — not just using them, <span> but understanding how they work from the inside</span>. I was curious about how they think, how they understand commands, and how code turns into the websites and apps we use every day.
                <br /><br />
                When I joined university, I started learning the fundamentals of programming. I began with <span>C++</span>, then moved to <span >Python</span>. I explored different fields, trying to find where my true passion lies.
                <br /><br />
                After exploring, I finally found my place in <span >Web Development</span>
                
                I followed a clear <span >roadmap</span>, and learned from experts like <span >"Elzero"</span>. It's been such an enjoyable journey, understanding how the websites I use every day are actually built.
                
                Now, I've mastered the <span >Front-End</span> track, and I'm continuing my journey into <span >Back-End</span> so I can have a complete vision of how the whole project works,<span> from the user interface to the server and database</span>.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;