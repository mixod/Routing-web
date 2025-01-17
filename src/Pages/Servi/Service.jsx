import ServiceMain from "./ServiceMain";

function Service() {
  return (
    <>
      <div>
        <div className="about-img">
          <div className="overlay">
            <div className="about-heading">
              <div>
                <b>Services</b>
              </div>

              <div>
                Home {">"} Service {">"} Services
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceMain />
    </>
  );
}

export default Service;
