import "./Header.css";

import Navbar from "../Navbar/Navbar";
import TextBox from "../TextBox/TextBox";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <div className="care-animation" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <TextBox />
    </section>
  );
};

export default Header;
