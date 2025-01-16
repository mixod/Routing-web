import Footer from "../../Components/Footer/Footer";
import PortfolioMain from "./PortfolioMain";

function Portfolio() {
  return (
    <>
      <div>
        <div className="about-img">
          <div className="overlay">
            <div className="about-heading">
              <div>
                <b>Portfolio</b>
              </div>

              <div>Home {">"} Portfolio</div>
            </div>
          </div>
        </div>
      </div>
      <PortfolioMain />
    </>
  );
}

export default Portfolio;
