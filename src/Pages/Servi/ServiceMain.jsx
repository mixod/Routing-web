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

function ServiceMain() {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <NavLink to={"/service/" + item.id}>
            <div>
              <img src={item.image} className="image-service"></img>
            </div>
            <div>{item.name}</div>
            <div>{item.description}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ServiceMain;
