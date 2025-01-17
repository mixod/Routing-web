import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [error, setError] = useState(" ");

  const submit = () => {
    if (name === " ") {
      setError("!name empty");
      return;
    }
    if (gender === " ") {
      setError("!gender not selected");
      return;
    }

    console.log(name, gender);
    setError(" ");
    setName(" ");
    setGender(" ");
  };
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </label>

      <select
        type="radio"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      >
        <option>Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input type="submit" onClick={submit}></input>
    </>
  );
}

export default ContactForm;
