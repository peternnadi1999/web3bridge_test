import React, { useState, useContext } from "react";
import { ContactContext } from "./context/contactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-1/2 m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="shadow mt-7 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
      />
      <button
        type="submit"
        className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
