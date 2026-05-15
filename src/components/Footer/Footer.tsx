import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        SB Group of Institutions is a private college established in 2003 at
        Yelahanka New Town, Bengaluru. The institution offers approved nursing
        and degree courses, practical training facilities, hostel support, and a
        campus environment for students from across India and abroad.
      </p>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>

    </section>
  );
};

export default Footer;
