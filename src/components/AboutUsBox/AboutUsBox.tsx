import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Private Nursing College Established in 2003</h1>
          <p>
            SB Group of Institutions is located at CA Site No, KHB 5th Phase,
            Yelahanka New Town, Bengaluru, Karnataka. Students from many states
            of India and different parts of the world study here. Our B.Sc.
            Nursing course is recognized by Rajiv Gandhi University, the State
            Government, and the Indian Nursing Council.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
