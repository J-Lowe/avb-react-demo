import React from "react";
import { useState } from "react";
import { Contact } from "../interfaces/Contact";
import classes from "./ContactForm.module.css";
import Email from "./Email";

declare interface ContactFormProp {
  contact: Contact;
}


function ContactForm(prop: ContactFormProp) {
  const [showInput, setShowInput] = useState(false);
  const [hasChange, setHasChange] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input type="text" id="firstName" defaultValue={prop.contact.firstName} onChange={(e) => {
            prop.contact.firstName = e.target.value;
          }} />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input type="text" id="lastName" defaultValue={prop.contact.lastName} onChange={(e) => {
            prop.contact.lastName = e.target.value;
          }} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {prop.contact.emails.map((email) => {
            return <Email email={email} />;
          })}
          {showInput && 
          <div>
            <input type="text" id="newEmail"/>
            <button onClick={() => {
              var input = document.getElementById("newEmail") as HTMLInputElement;
              prop.contact.emails.push(input.value);
              setShowInput(false);
              setHasChange(true);
            }}>Add</button>
            <button onClick={() => setShowInput(false)}>Cancel</button>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={() => setShowInput(true)}>+</button> add email
        </div>
      </div>
      <div className={classes.contactFooter + " row"}>
        <div className="col">
          <button>Delete</button>
        </div>
        <div className="col">
          <button onClick={() => setHasChange(false)}>Cancel</button>
          <button onClick={() => {
            if (prop.contact && prop.contact.id) {
              fetch("https://avb-contacts-api.herokuapp.com/contacts/" + prop.contact.id, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(prop.contact)
              });
            } else {
              fetch("https://avb-contacts-api.herokuapp.com/contacts/", {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(prop.contact)
              });
            }
            setHasChange(false);
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
