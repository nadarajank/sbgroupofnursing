import "./TextBox.css";
import { Link } from "react-router-dom";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>SB Group of Institutions</h1>
      <p>
        A private nursing and degree college established in 2003 at Yelahanka
        New Town, Bengaluru.
      </p>
      <Link to="/admission-form" className="hero-btn">
        Book Now
      </Link>
    </div>
  );
};

export default TextBox;
