// import { NavLink } from "react-router";
// import { data } from "../../assets/data";

// function ServiceMain() {
//   return (
//     <>
//       <ul>
//         {data.map((a) => (
//           <li key={a.id}>
//             <NavLink to={"/service/" + a.id}>
//               <div className="name">{a.name}</div>
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ServiceMain;

import { data } from "../../assets/data";
import { NavLink } from "react-router";
import "./service.css";

function ServiceMain() {
  return (
    <>
      <div className="back-img-service">
        {" "}
        <div className="port">
          <div
            style={{ color: "#00a0e8", fontWeight: "600", fontSize: "large" }}
          >
            Our Services
          </div>
          <div style={{ fontSize: "xx-large", color: "#162171" }}>
            <b>What Can We Do For You</b>
          </div>
          <div className="line"></div>
        </div>
        <ul className="main-service">
          {data.map((item) => (
            <li key={item.id} className="gap-for-images">
              <NavLink to={"/service/" + item.id}>
                <div className="main-div-serivce-link">
                  <div>
                    <img src={item.image} className="image-service"></img>
                  </div>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ServiceMain;
