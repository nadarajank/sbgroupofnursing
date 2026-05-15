import "./Courses.css";

const courseImages = Array.from({ length: 18 }, (_, index) => index + 1);

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Study approved nursing and degree courses with practical training,
        academic guidance, and campus support.
      </p>
      <div className="course-grid">
        <div className="course-col">
          <h3>B.Sc. Nursing</h3>
          <p>
            A recognized nursing program approved by the university, state
            government, and Indian Nursing Council.
          </p>
        </div>
        <div className="course-col">
          <h3>Degree Courses</h3>
          <p>
            Choose from multiple degree courses offered by SB Group of
            Institutions for students from India and abroad.
          </p>
        </div>
        <div className="course-col">
          <h3>Practical Training</h3>
          <p>
            Learn with the required original materials and facilities for
            hands-on practical learning.
          </p>
        </div>
      </div>

      <div className="course-gallery">
        {courseImages.map((imageNumber) => (
          <img
            key={imageNumber}
            src={`/images/${imageNumber}.jpeg`}
            alt={`SB Group of Institutions course ${imageNumber}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
