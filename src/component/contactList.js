import React, { useContext } from "react";
import { ContactContext } from "../component/context/contactContext";
import ContactItem from "./contactItem";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="w-1/2 m-auto mt-8 bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact List</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem key={contact.email} contact={contact} />
        ))
      ) : (
        <p className="text-center text-gray-500">No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;
