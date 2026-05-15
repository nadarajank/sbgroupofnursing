import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/certificate.jpg" alt="" />
          <h2>SB Group of Institutions Nursing Programs</h2>
          <p>
            SB Group of Institutions is a private college established in 2003 at
            Yelahanka New Town, Bengaluru. The college offers nursing and degree
            courses for students from different states of India and from abroad.
          </p>
          <br />
          <p>
            The B.Sc. Nursing course is recognized by Rajiv Gandhi University,
            the State Government, and the Indian Nursing Council. Courses taught
            here are approved by the respective government and university
            authorities.
          </p>
          <br />
          <p>
            The campus provides infrastructure for practical training, play
            facilities, and separate hostel facilities for girls and boys. Food
            is arranged to suit the tastes of students from different states.
          </p>
          <br />
          <p>
            Contact the college for admission details, course information, and
            campus facilities.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows={5} placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3>Course Highlights</h3>
          <div>
            <span>B.Sc. Nursing</span>
            <span>2003</span>
          </div>
          <div>
            <span>Degree Courses</span>
            <span>Approved</span>
          </div>
          <div>
            <span>Practical Training</span>
            <span>Available</span>
          </div>
          <div>
            <span>Boys Hostel</span>
            <span>Available</span>
          </div>
          <div>
            <span>Girls Hostel</span>
            <span>Available</span>
          </div>
          <div>
            <span>Sports Facilities</span>
            <span>Available</span>
          </div>
          <div>
            <span>Location</span>
            <span>Bengaluru</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
