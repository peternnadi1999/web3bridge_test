const CONTACTS_KEY = 'contacts';

export const getContacts = () => {
    const contacts = localStorage.getItem(CONTACTS_KEY);
    return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts) => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};
