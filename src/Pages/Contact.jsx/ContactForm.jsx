import { useState } from "react";

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
    console.log(name);
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <div style={{ color: "red", fontSize: "large" }}>{error}</div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter name"
        ></input>
      </div>
      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter email"
        ></input>
      </div>
      <div>
        <textarea
          placeholder="message"
          rows={5}
          color="50"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default ContactForm;
