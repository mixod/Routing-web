/* eslint-disable react/prop-types */
import "./Route.css";
function RouteMain({ setContent }) {
  return (
    <div className="route">
      <ul>
        <a href="javascript:void(0)">
          <li onClick={() => setContent("Digital Marketing")}>
            Digital Marketting
          </li>
        </a>
        <a href="javascript:void(0)">
          <li onClick={() => setContent("Content Marketing")}>
            Content Marketting
          </li>
        </a>
        <a href="javascript:void(0)">
          <li onClick={() => setContent("SEO Services")}>Seo Service</li>
        </a>
      </ul>
    </div>
  );
}

export default RouteMain;
