import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../Materials/header-logo.png";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center">
            <div className="footer-text-and-image">
              <img
                src={logoImage}
                alt="Delta Tau Delta"
                className="footer-logo mb-2"
              />
              <div id="footer-title" className="h4 mb-2">
                Delta Tau Delta
              </div>
            </div>

            <a
              href="https://www.instagram.com/deltnu/"
              className="text-white me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <div id="company">© 2024 Delta Tau Delta Iota Psi Chapter</div>
            <div id="designer-tags">
              Designed & Developed by Vignan Kamarthi and Sebastian Tremblay
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
