import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>About</h2>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <img src="/portfoilo/assets/img/profile-img.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Backend Developer</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>4 February 2003</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.kaanlatinler.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+90 (539) 323 1326</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Antalya, Turkey</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span id="age">21</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Associate</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kaanlatinlerhd@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}

export default About