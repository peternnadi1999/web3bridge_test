import React from 'react';
import { ContactProvider } from './component/context/contactContext';
import ContactForm from './component/Form';
import ContactList from './component/contactList';


const App = () => {
    return (
        <ContactProvider>
            <div className="App">
                <h1 className='w-1/2 font-bold font-mono m-auto my-5 text-3xl'>Contact Profile System</h1>
                <ContactForm />
                <ContactList />
            </div>
        </ContactProvider>
    );
};

export default App;
