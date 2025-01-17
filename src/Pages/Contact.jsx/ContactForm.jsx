import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  function submit() {
    if (name === "") {
      setError("name is empty");
      return;
    }
    if (lastName === "") {
      setError("last name is empty");
      return;
    }
    if (gender === "") {
      setError("Gender is not selected");
      return;
    }
    setError("");
    console.log(name, lastName, gender);
    setName("");
    setGender("");
    setLastName("");
  }
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <label htmlFor="name">
        Name:
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          name="name"
          type="text"
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          name="lastName"
          type="text"
        />
      </label>
      <select
        onChange={(e) => {
          setGender(e.target.value);
        }}
        value={gender}
      >
        <option value="">Select a value</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
        <option value="o">Others</option>
      </select>
      <input type="submit" onClick={submit} />
    </>
  );
}

export default ContactForm;
