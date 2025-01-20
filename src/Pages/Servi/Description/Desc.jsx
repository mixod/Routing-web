import { useParams } from "react-router";
import { data } from "../../assets/Data";
function Desc() {
  const params = useParams();
  if (isNaN(params.desc)) {
    return <>Invalid params</>;
  }
  const id = parseInt(params.desc);
  const userDatas = data.filter((item) => item.id === id);
  if (userDatas.length <= 0) {
    return <>Data not found</>;
  }

  const userData = userDatas[0];

  return (
    <div>
      <div>name:{userData.name}</div>
      <div>age:{userData.age}</div>
    </div>
  );
}

export default Desc;
