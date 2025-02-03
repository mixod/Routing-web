import "./Route.css";

function Digital() {
  return (
    <div>
      <div className="img-flex">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="public/image/1.png"
        ></img>
        <img src="public/image/2.jpg"></img>
        <img src="public/image/4.jpg"></img>
      </div>
      <div className="img-flex">
        <img src="public/image/3.jpg"></img>
        <img src="public/image/5.jpg"></img>
        <img src="public/image/6.jpg"></img>
      </div>
    </div>
  );
}

export default Digital;
