import "./desc.css";
import { data } from "../../../assets/data";
import { useParams } from "react-router";
import DescMain from "./DescMain";
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

  return (
    <div>
      <div className="about-img">
        <div className="overlay">
          <div className="about-heading">
            <div>
              <b>Social Media</b>
            </div>

            <div>Home {">"} Social Media</div>
          </div>
        </div>
      </div>
      <DescMain />
    </div>
  );
}

export default Desc;
