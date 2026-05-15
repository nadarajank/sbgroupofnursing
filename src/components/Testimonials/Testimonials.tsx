import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Students Say</h1>
      <p>
        Students from different states and countries choose SB Group of
        Institutions for nursing and degree education.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/user1.jpg" alt="" />
          <div>
            <p>
              &quot;The nursing program gives us practical learning, supportive
              teachers, and a good campus environment.&quot;
            </p>
            <h3>Nursing Student</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/user2.jpg" alt="" />
          <div>
            <p>
              &quot;The hostel and food arrangements help students from different
              states feel comfortable while studying here.&quot;
            </p>
            <h3>Hostel Student</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
