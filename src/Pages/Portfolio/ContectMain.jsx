/* eslint-disable react/prop-types */
import Content from "./Route/Content";
import Digital from "./route/Digital";
import SeoService from "./route/SeoService";

function ContectMain({ content }) {
  switch (content) {
    case "Digital Marketing":
      return <Digital />;
    case "Content Marketing":
      return <Content />;
    case "SEO Services":
      return <SeoService />;
  }
}

export default ContectMain;
