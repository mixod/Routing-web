import "./desc.css";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Footer from "../../../Components/Footer/Footer";
function DescMain() {
  return (
    <>
      <div className="main-social-media">
        <div className="description-socil-media">
          <div>
            <img
              src="\public\image\social-media-mark.png"
              className="image-social-media"
            ></img>
          </div>
          <div>
            <h2 style={{ color: "#162171" }}>Social Media Marketting</h2>
          </div>
          <div className="Paragraph-service">
            <p>
              Social Media Marketing has been a buzzword in the corporate world.
              It resonates almost at every nook
              <br /> and corner. Except for some innovative marketers,
              entrepreneurs are oblivious about how to use Social
              <br /> Media professionally and consistently and achieve the
              desired results they require.
              <br />
            </p>
            <p>
              Undeniably, there is a huge potentiality for Social Media
              Marketing to increase sales since there is an
              <br /> obvious direct correlation between digital media and real
              trisection. Even researches have proven the
              <br /> efficacy of Social Media Marketing for business. According
              to Hubspot, 92% of marketers in 2014 claimed
              <br />
              that social media marketing was important for their business, with
              80% indicating their efforts increased
              <br /> traffic to their websites. And according to Social Media
              Examiner, 97% of marketers are currently
              <br /> participating in social media—but 85% of participants arent
              sure what social media tools are the best to use.
            </p>
          </div>
        </div>
        <div className="service-social-media">
          <div className="medias-name">
            <h2 style={{ color: "#162171" }}>All Services</h2>
            <ul>
              <li>Social Media Marketting</li>
              <li>Infuencer Marketing</li>
              <li>Content Marketing</li>
              <li>SEO</li>
              <li>Email Marketing</li>
              <li>Digital Marketing</li>
              <li>Branding and Positioning</li>
              <li>Domain Register & Web Hosting</li>
            </ul>
          </div>
          <div className="CONTACT-SERVICE">
            <h2 style={{ color: "#162171" }}>Need Help</h2>
            <p className="Paragraph">We are available 24/7</p>
            <ul>
              <li>
                <CiLocationOn />
                Mid-Baneshwor Kathmandu
              </li>
              <li>
                <CiMobile1 />
                01-4435890
              </li>
              <li>
                <CiMail />
                info@subhabihani.com.np
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DescMain;
