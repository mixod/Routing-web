import Footer from "../../Components/Footer/Footer";
import AboutMain from "../About/AboutMain";

import ContactMain from "../Contact.jsx/ContactMain";

import "./home.css";

function Home() {
  return (
    <>
      <div className="image">
        <div className="mainhome">
          <div className="Heading">Subha Bihani Digital Media Pvt. Ltd</div>
          <div className="sub-heading">
            <h3>
              Empower Your Business
              <br /> Traffic at The Top
            </h3>
          </div>
          <div>
            <p className="Paragraph">
              Holisticly procrastinate mission-critical convergence with
              <br /> reliable customer service. Assertively underwhelm idea-
              <br />
              sharing for impactful solutions.
            </p>
          </div>
          <div>
            <button
              style={{
                color: "white",
                backgroundColor: "#00a0e8",
                padding: "1%",
              }}
            >
              Get Start Now
            </button>
          </div>
        </div>
      </div>
      <AboutMain />
      <ContactMain />
      <Footer />
    </>
  );
}

export default Home;
