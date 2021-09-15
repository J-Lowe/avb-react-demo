import classes from "./ContactList.module.css";
import { ContactPage } from "../interfaces/ContactPage";
import { Contact } from "../interfaces/Contact";

export declare interface ContactListProp {
  contactPage?: ContactPage;
  setSelectedContact: Function;
  selectedContactId?: number;
}

function ContactList(prop: ContactListProp) {
  prop.contactPage?.contacts.sort((a: any, b: any) => a.firstName?.localeCompare(b.firstName));
  return (
    <div className="contactListDiv lightBackground">
      <div className="row">
        <div className="col">
          <h2>Contacts</h2>
        </div>
        <div className="col-1">
          <button className={"btn addBtn moveLeft"} onClick={() => prop.setSelectedContact({
            id: null,
            firstName: "",
            lastName: "",
            emails: []})
          }>+</button>
        </div>
      </div>
      <div className="row contactList">
        <div className="col">
          {prop.contactPage?.contacts.map((contact) => {
            return (
              <p>
                <div className={"btn " + classes.jbtn + (contact.id == prop.selectedContactId ? " " + classes.selected : "")}
                  onClick={() => {
                    prop.setSelectedContact(contact);
                  }}
                >
                  {contact.firstName} {contact.lastName}
                </div>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
