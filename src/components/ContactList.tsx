import classes from "./ContactList.module.css";
import { ContactPage } from "../interfaces/ContactPage";
import { Contact } from "../interfaces/Contact";

export declare interface ContactListProp {
  contactPage?: ContactPage;
  setSelectedContact: Function;
}

function ContactList(prop: ContactListProp) {
  prop.contactPage?.contacts.sort((a: any, b: any) => a.firstName?.localeCompare(b.firstName));
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Contacts</h2>
        </div>
        <div className="col-1">
          <button  onClick={() => prop.setSelectedContact({
            id: null,
            firstName: "",
            lastName: "",
            emails: []})
          }>+</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {prop.contactPage?.contacts.map((contact) => {
            return (
              <p>
                <button className="btn"
                  onClick={() => {
                    prop.setSelectedContact(contact);
                  }}
                >
                  {contact.firstName} {contact.lastName}
                </button>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
