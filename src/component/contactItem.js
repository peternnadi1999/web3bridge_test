import React, { useContext } from 'react';
import { ContactContext } from './context/contactContext';

const ContactItem = ({ contact }) => {
    const { deleteContact } = useContext(ContactContext);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center transition transform hover:scale-105">
        <div>
            <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
            <p className="text-gray-600">{contact.email}</p>
        </div>
        <button
            onClick={() => deleteContact(contact.email)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
            Delete
        </button>
    </div>
    );
};

export default ContactItem;
