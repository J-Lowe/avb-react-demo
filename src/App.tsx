import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ContactList />
        </div>
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
