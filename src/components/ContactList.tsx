import classes from "./ContactList.module.css";

function ContactList() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Contacts</h2>
        </div>
        <div className="col-1">
          <button>+</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Add list here</p>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
