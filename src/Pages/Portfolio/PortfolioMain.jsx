import "./Portfolio.css";

function PortfolioMain() {
  return (
    <>
      <div className="top-portfolio-main">
        <div>Previous Project</div>
        <div>
          <h2>Our Portfolio</h2>
        </div>
        <div className="line"></div>
      </div>

      <div className="img-flex">
        <img src="public/image/1.png"></img>
        <img src="public/image/2.jpg"></img>
        <img src="public/image/4.jpg"></img>
      </div>
      <div className="img-flex">
        <img src="public/image/3.jpg"></img>
        <img src="public/image/5.jpg"></img>
        <img src="public/image/6.jpg"></img>
      </div>
    </>
  );
}

export default PortfolioMain;
