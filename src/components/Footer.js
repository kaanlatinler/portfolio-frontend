import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Kaan Latinler</h3>
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
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
