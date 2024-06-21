import React, { createContext, useState } from 'react';
import { getContacts, saveContacts } from '../storage/localStorage';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(getContacts());

    const addContact = (contact) => {
        const newContacts = [...contacts, contact];
        setContacts(newContacts);
        saveContacts(newContacts);
    };

    const deleteContact = (email) => {
        const newContacts = contacts.filter((contact) => contact.email !== email);
        setContacts(newContacts);
        saveContacts(newContacts);
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};
