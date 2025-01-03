import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Kaan Latinler</h1>
        <p>
          I'm Backend Developer
          <span className="typed" data-typed-items="Backend Developer"></span>
        </p>
        <div className="social-links">
          <a href="https://twitter.com/Kaan_ltnlr" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/kaanlatinler/"
            className="instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kaan-latinler-0a2615271/"
            className="linkedin"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
