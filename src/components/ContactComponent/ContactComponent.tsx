import "./ContactComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ContactComponent = () => {
  return (
    <>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>
                <h5>CA Site No, KHB 5th Phase</h5>
                <p>Yelahanka New Town, Bengaluru, Karnataka</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>
                <h5>+91 6262172262</h5>
                <p>Monday to Saturday, 10AM to 6PM</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>
                <h5>info@sbgroup.edu.in</h5>
                <p>Email us Your query</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            {/* <form onSubmit={handleSubmit}>
              <input type="text" name="studentName" placeholder="Student name" required />
              <input
                type="text"
                name="parentName"
                placeholder="Father or mother name"
                required
              />
              <select name="courseName" defaultValue="" required>
                <option value="" disabled>
                  Select course name
                </option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              <input type="tel" name="mobileNumber" placeholder="Mobile number" required />
              <input type="tel" name="whatsappNumber" placeholder="WhatsApp number" required />
              <input type="text" name="district" placeholder="District" required />
              <input type="text" name="state" placeholder="State" required />
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form> */}
            <Link
              to="/admission-form"
              className="hero-btn"
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: "#ff4b5c",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>


      </section>
    </>
  );
};

export default ContactComponent;
