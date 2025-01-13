import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./header.css";
function Header() {
  return (
    <>
      <div className="Header">
        <div className="Header-info" style={{ color: "white" }}>
          <FaHeadphonesSimple />
          24x7 Technical Support
          <FaPhoneAlt />
          01-4435890
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a href="#">
                <FaFacebook style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="#">
                <LuTwitter style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram style={{ color: "white" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
