import "./Location.css";

const location =
  "https://www.google.com/maps?q=CA%20Site%20No%2C%20KHB%205th%20Phase%2C%20Yelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka&output=embed";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        title="SB Group of Institutions location map"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default Location;
