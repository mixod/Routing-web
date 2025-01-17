import { useState } from "react";
import "./Contact.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  function submit() {
    if (name === "") {
      setError("! Empty Name");
      return;
    }
    if (email === "") {
      setError("! Empty Email");
      return;
    }
    if (message === "") {
      setError("! Empty text");
      return;
    }

    setError("");
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <div className="main-form-section">
        <div className="form">
          <div style={{ color: "#162171", fontSize: "x-large" }}>
            <b>Any Query</b>
          </div>
          <div style={{ color: "red", fontSize: "large" }}>{error}</div>
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter name"
              className="name"
            ></input>
          </div>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter email"
              className="email"
            ></input>
          </div>
          <div>
            <textarea
              placeholder="message"
              rows={5}
              cols="50"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="message"
            ></textarea>
          </div>
          <div>
            <button onClick={submit}>Submit</button>
          </div>
        </div>
        <div className="contact-another-section">
          <div>
            <b style={{ color: "#162171", fontSize: "x-large" }}>Our Office</b>
          </div>
          <div>
            <ul>
              <li>Mid-Baneshwor</li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Phone: 01 -4435890</li>
              <li>Email: info@subhabihani.com.np</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
