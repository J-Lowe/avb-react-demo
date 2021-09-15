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
  const [selectedContact, setSelectedContact] = useState<Contact>({
    id: undefined,
    firstName: "",
    lastName: "",
    emails: [],
    hasChange: false,
  });
  const [updateList, setUpdateList] = useState(true);

  useEffect(() => {
    if (updateList) {
      fetch("https://avb-contacts-api.herokuapp.com/contacts/paginated").then(response => {return response.json()}).then(data => {
        setIsLoading(false);
        setContactList(data);
        setUpdateList(false);
      });
    }
  }, [updateList]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ContactList contactPage={contactList} setSelectedContact={setSelectedContact} selectedContactId={selectedContact.id}/>
        </div>
        <div className="col">
          <ContactForm contact={selectedContact} setUpdateList={setUpdateList} setSelectedContact={setSelectedContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
