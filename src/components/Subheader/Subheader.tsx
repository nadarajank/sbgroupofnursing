import "./Subheader.css";

import Navbar from "../Navbar/Navbar";

type SubheaderProps = {
  header: string;
};

const Subheader = ({ header }: SubheaderProps) => {
  return (
    <section className="sub-header">
      <Navbar />
      <h1>{header}</h1>
    </section>
  );
};
export default Subheader;
