/* eslint-disable react/prop-types */

function RouteMain({ setContent }) {
  return (
    <>
      <ul>
        <li onClick={() => setContent("Digital Marketing")}>
          Digital Marketting
        </li>
        <li onClick={() => setContent("Content Marketing")}>
          Content Marketting
        </li>
        <li onClick={() => setContent("SEO Services")}>Seo Service</li>
      </ul>
    </>
  );
}

export default RouteMain;
