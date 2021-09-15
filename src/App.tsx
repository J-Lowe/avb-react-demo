import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList, { ContactListProp } from './components/ContactList';
import ContactForm from './components/ContactForm';
import { ContactPage } from './interfaces/ContactPage';
import { Contact } from './interfaces/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState<ContactPage>();
  const [selectedContact, setSelectedContact] = useState<Contact>();

  useEffect(() => {
    fetch("https://avb-contacts-api.herokuapp.com/contacts/paginated").then(response => {return response.json()}).then(data => {
      setIsLoading(false);
      setContactList(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ContactList contactPage={contactList} setSelectedContact={setSelectedContact}/>
        </div>
        <div className="col">
          <ContactForm contact={selectedContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;
