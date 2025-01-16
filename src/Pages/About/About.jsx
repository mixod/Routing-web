import Footer from "../../Components/Footer/Footer";
import "./about.css";
import AboutMain from "./AboutMain";
function About() {
  return (
    <>
      <div>
        <div className="about-img">
          <div className="overlay">
            <div className="about-heading">
              <div>
                <b>ABOUT US</b>
              </div>

              <div>Home {">"} About US</div>
            </div>
          </div>
        </div>
      </div>
      <AboutMain />
      <Footer />
    </>
  );
}

export default About;
