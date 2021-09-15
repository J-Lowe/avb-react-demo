import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Contact } from "../interfaces/Contact";
import classes from "./ContactForm.module.css";
import Email from "./Email";
import NameInput from "./NameInput";

declare interface ContactFormProp {
  contact: Contact;
  setUpdateList: Function;
  setSelectedContact: Function;
}

type FormData = {
  firstName: string;
  lastName: string;
};

function ContactForm(prop: ContactFormProp) {
  const { register, setValue, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
  const [showInput, setShowInput] = useState(false);
  const [updateEmailList, setUpdateEmailList] = useState(false);

  function removeEmail(email: string) {
    var index = prop.contact.emails.indexOf(email);
    prop.contact.emails.splice(index, 1);
    prop.contact.hasChange = true;
    setUpdateEmailList(true);
  }
  
  if(updateEmailList) {
    setUpdateEmailList(false);
  }

  setValue("firstName", "" + prop.contact.firstName);
  setValue("lastName", "" + prop.contact.lastName);

  return (
    <div>
      <div className="row">
        <div className="col">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input {...register("firstName")} />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input {...register("lastName")} />
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
            return <Email email={email} removeEmail={removeEmail} />;
          })}
          {showInput && 
          <div>
            <input type="text" id="newEmail"/>
            <button onClick={() => {
              var input = document.getElementById("newEmail") as HTMLInputElement;
              prop.contact.emails.push(input.value);
              prop.contact.hasChange = true;
              setShowInput(false);
              setUpdateEmailList(true);
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
          <button onClick={() => {
            if (prop.contact && prop.contact.id) {
              fetch("https://avb-contacts-api.herokuapp.com/contacts/" + prop.contact.id, {
                method: 'DELETE'
              }).then(() => prop.setUpdateList(true));
            }
          }}>Delete</button>
        </div>
        <div className="col">
          <button onClick={() => {
            fetch("https://avb-contacts-api.herokuapp.com/contacts/" + prop.contact.id).then(response => {return response.json()}).then(data => {
              setValue("firstName", "" + data.firstName);
              setValue("lastName", "" + data.lastName);
              prop.contact.emails = data.emails;
              prop.contact.hasChange = false;
              setUpdateEmailList(true);
            });
          }}>Cancel</button>
          <button onClick={() => {
            if (prop.contact && prop.contact.id) {
              prop.contact.firstName = getValues("firstName");
              prop.contact.lastName = getValues("lastName");
              fetch("https://avb-contacts-api.herokuapp.com/contacts/" + prop.contact.id, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(prop.contact)
              }).then(() => prop.setUpdateList(true));
            } else {
              prop.contact.firstName = getValues("firstName");
              prop.contact.lastName = getValues("lastName");
              fetch("https://avb-contacts-api.herokuapp.com/contacts/", {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(prop.contact)
              }).then(() => prop.setUpdateList(true));
            }
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
