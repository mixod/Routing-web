import { useState } from "react";
import ContectMain from "./ContectMain";
import RouteMain from "./route/RouteMain";

function PortfolioMain() {
  const [content, setContent] = useState("Digital");
  return (
    <>
      <RouteMain setContent={setContent} />
      <ContectMain content={content} />
    </>
  );
}

export default PortfolioMain;
