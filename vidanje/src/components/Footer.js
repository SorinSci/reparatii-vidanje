import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      {/* Social and Language Section */}
      <div className="footer-top">
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Companie</h3>
          <ul>
            <li>Despre noi </li>
            <li>Cariere</li>
            <li>Advertising</li>
            <li>Ajutor</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Termeni si conditii</li>
            <li>Politica de confidentialitate</li>
          </ul>
        </div>
    
      </div>
    </footer>
  );
}

export default Footer;