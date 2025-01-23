import "./desc.css";
import { data } from "../../../assets/data";
import { useParams } from "react-router";
function Desc() {
  const params = useParams();
  if (isNaN(params.desc)) {
    alert("it is not a numner");
  }
  const number = parseInt(params.desc);
  const filterdatas = data.filter((item) => item.id === number);
  if (filterdatas === 0) {
    alert("there is no data in the array");
  }

  return <div className="sangram"></div>;
}

export default Desc;
