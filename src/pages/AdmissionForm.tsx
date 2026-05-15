import Footer from "../components/Footer/Footer";
import Subheader from "../components/Subheader/Subheader";
import { admissionFormEmbedUrl } from "../config/admissionForm";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <>
      <Subheader header="Admission Enquiry Form" />
      <section className="admission-form-page">
        <iframe
          src={admissionFormEmbedUrl}
          title="SB Group of Institutions admission enquiry form"
          loading="lazy"
        >
          Loading admission form...
        </iframe>
      </section>
      <Footer />
    </>
  );
};

export default AdmissionForm;
