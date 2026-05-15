import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Campus and Facilities</h1>
      <p>Facilities are provided to support study, practice, hostel life, and recreation.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.png" alt="" />
          <h3>Learning Infrastructure</h3>
          <p>
            The college provides the materials and infrastructure required for
            nursing practical training.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/basketball.png" alt="" />
          <h3>Sports and Play Area</h3>
          <p>
            Necessary facilities are available for students to play, stay
            active, and enjoy campus life.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/cafeteria.png" alt="" />
          <h3>Hostel and Food</h3>
          <p>
            Separate hostel facilities are available for boys and girls, with
            food adjusted to suit students from different states.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
