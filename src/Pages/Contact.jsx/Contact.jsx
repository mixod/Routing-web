/* eslint-disable react/no-unknown-property */
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

      <div style={{ width: "100%", height: "450px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56547.72758147699!2d85.40097179919698!3d27.648262843355404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aa64a37499d%3A0x77c794ac234add76!2sSuryabinayak!5e0!3m2!1sen!2snp!4v1737125015296!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
