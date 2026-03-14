import React from 'react';
import pro1 from '../assets/images/pro-1.PNG'
import img2 from '../assets/images/pro-2.PNG'
import img3 from '../assets/images/pro-3.PNG'
import img4 from '../assets/images/pro-4.PNG' 
import img5 from '../assets/images/pro-5.PNG' 
import img6 from '../assets/images/project-6.jpg' 

const projects = [
    {
        id: 1,
        imgUrl: pro1,
        title: " Floral Elegance Website",
        text: "Simple Design With HTML & CSS",
        GitHub:"https://github.com/Aliaamahm0ud/website-with-html-and-css.git"
    },
    {
        id: 2,
        imgUrl: img2,
        title: " Shopping website(e-commers)",
        text: "Online Store With HTML5 , CSS3 , Flexbox , Grid",
        GitHub :"https://github.com/Aliaamahm0ud/project-with-html5-and-css3.git"
    },
    {
        id: 3,
        imgUrl: img3,
        title: " Lighthouse -modern Lighting E-commerce",
        text: "Design With Bootstrap 5",
        GitHub : "https://github.com/Aliaamahm0ud/bootstrap-project.git"
    },
    {
        id: 4,
        imgUrl: img4,
        title: " lunara jewelry-luxury Earrings collection",
        text: "Project with Html5,Css3,Bootstrap,JavaScript",
        GitHub:"https://github.com/Aliaamahm0ud/simple-react-blog.git"
    },
    {
        id: 5,
        imgUrl: img5,
        title: "Modern Homewear E-commerce",
        text: "project with JavaScript and JSON"
    },
    {
        id: 6,
        imgUrl: img6,
        title: "Password Generator",
        text: "Generate Random Passwords",
        GitHub:"https://github.com/Aliaamahm0ud/react-ecommerce-product-page.git"
    },
]

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-section">
                <h2 className="section-title text-light mb-3 fs-1">My Projects</h2>
                
                {/* شيلنا الـ tabs تماماً */}
                
                <div className="project-cards container w-100">
                    <div className="row justify-content-center row-gap-4 w-100 mx-auto">
                        {projects.map((item) => {
                            return (
                                <div key={item.id} className='card-spacing col-11 col-md-6 col-lg-4'>
                                    <div className="project-card card text-bg-dark">
                                        <img src={item.imgUrl} className="card-img" alt={item.title} />
                                        <div className="card-img-overlay">
                                            <h3 className="card-title">{item.title}</h3>
                                            <p className="card-text">{item.text}</p>
                                            
                                        </div>
                                        <a  href={item.GitHub}  target="_blank"  rel="noopener noreferrer" className="github-link" >
    <i className="fa-brands fa-github"></i>
    <span>GitHub</span>
  </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default React.memo(Projects);
