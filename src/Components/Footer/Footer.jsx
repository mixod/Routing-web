import { FaFacebook } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { PiCopyrightThin } from "react-icons/pi";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="overlay-footer">
        <div className="footer">
          <div className="about-footer">
            <div>
              <b>Subha Bihani Digital Media Pvt. Ltd</b>
            </div>
            <div>
              Subha Bihani Digital Media PVT. LTD is a results-driven
              <br /> digital marketing agency in Nepal focused on connecting
              <br />
              brands to people. We are a one-stop solution provider
              <br /> for all your Digital Marketing requirements.
            </div>
            <div>
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
          <div className="Quick-links">
            <div>
              <b>Quick Links</b>
            </div>
            <div>
              <ul>
                <li>About</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <div>
              <b>Legal</b>
            </div>
            <div>
              <ul>
                <li>Legal Information</li>
                <li>Privacy Policy</li>
                <li>Report</li>
                <li>Term of Service</li>
              </ul>
            </div>
          </div>
          <div className="getInTouch">
            <div>
              <b>Get In Touch</b>
            </div>
            <div>
              <ul>
                <li>
                  <CiLocationOn style={{ color: "white" }} />
                  Mid Baneshwor Kathmandu
                </li>
                <li>
                  <CiMail style={{ color: "white" }} />
                  info@subhabihani.com.np
                </li>
                <li>
                  <FaPhoneAlt style={{ color: "white" }} />
                  01-3944894
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          Copyrights <PiCopyrightThin />. All right reserved by Mixo
        </div>
        <div>
          <ul>
            <li>Privicy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
