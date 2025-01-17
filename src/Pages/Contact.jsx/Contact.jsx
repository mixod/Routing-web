import Footer from "../../Components/Footer/Footer";
import ContactForm from "./ContactForm";
import ContactMain from "./ContactMain";

function Contact() {
  return (
    <>
      <div>
        <div className="about-img">
          <div className="overlay">
            <div className="about-heading">
              <div>
                <b>Contact Us</b>
              </div>

              <div>Home {">"} Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <ContactMain />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
