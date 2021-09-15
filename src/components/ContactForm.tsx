import { useState } from "react";
import { Contact } from "../interfaces/Contact";
import classes from "./ContactForm.module.css";
import Email from "./Email";

declare interface ContactFormProp {
  contact?: Contact;
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
          <input type="text" id="firstName" value={prop.contact?.firstName} />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input type="text" id="lastName" value={prop.contact?.lastName} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {prop.contact?.emails.map((email) => {
            return <Email email={email} />;
          })}
          {showInput && 
          <div>
            <input type="text" id="newEmail"/>
            <button onClick={() => {
              var input = document.getElementById("newEmail") as HTMLInputElement;
              prop.contact?.emails.push(input.value);
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
          <button onClick={() => setHasChange(false)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
