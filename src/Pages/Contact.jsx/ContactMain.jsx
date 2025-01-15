import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "./Contact.css";
function ContactMain() {
  return (
    <>
      <div className="contact-info">
        <div className="informationContact-one">
          <div>
            <MdOutlinePhoneIphone style={{ color: "#00a0e8" }} />
          </div>

          <div>
            <b style={{ color: "black" }}>Call Us</b>
          </div>
          <div> 01-4435890</div>
        </div>
        <div className="informationContact-two">
          <div>
            <CiLocationOn style={{ color: "#00a0e8" }} />
          </div>

          <div>
            {" "}
            <b style={{ color: "black" }}>Visit Us</b>
          </div>

          <div>Mid-Baneshwor,Nepal</div>
        </div>
        <div className="informationContact-three">
          <div>
            <CiMail style={{ color: "#00a0e8" }} />
          </div>

          <div>
            <b style={{ color: "black" }}>Visit Us</b>
          </div>

          <div> info@subhabihani.com.np</div>
        </div>
      </div>
    </>
  );
}

export default ContactMain;
