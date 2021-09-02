import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <label htmlFor="firstName">First Name</label><br />
          <input type="text" id="firstName" />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name</label><br />
          <input type="text" id="lastName" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>List goes here</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button>+</button> add email
        </div>
      </div>
      <div className={classes.contactFooter + " row"}>
        <div className="col">
          <button>Delete</button>
        </div>
        <div className="col">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
