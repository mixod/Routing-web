import { useState } from "react";
import ContectMain from "./ContectMain";
import RouteMain from "./route/RouteMain";
import "./Portfolio.css";
import Footer from "../../Components/Footer/Footer";
function PortfolioMain() {
  const [content, setContent] = useState("Digital Marketing");
  return (
    <>
      <div className="port">
        <div style={{ color: "#00a0e8", fontWeight: "600", fontSize: "large" }}>
          Previous Project
        </div>
        <div style={{ fontSize: "xx-large", color: "#162171" }}>
          <b>Our Portfolio</b>
        </div>
        <div className="line"></div>
      </div>
      <RouteMain setContent={setContent} />
      <ContectMain content={content} />
      <Footer />
    </>
  );
}

export default PortfolioMain;
