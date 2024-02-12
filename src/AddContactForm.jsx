import React, { useState } from "react";

function AddContactForm(props) {

  const [error, setError] = useState(false)

  const [contact, setContact] = useState({
    
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if(contact.name ==="" || contact.lastName==="" || contact.phone==="" || contact.email===""){
      setError(true)
      return
    }
    setError(false)
    addContact()
  };

  const addContact=()=>{
    props.onContactAdded(contact)
  }

  const contactHandler=(event)=>{
    const value=event.target.value
    const name=event.target.name
    setContact(() => ({...contact,[name]: value}))
    console.log(contact)
  }

  return (
    <form>
      <div className="shadow-lg bg-body-tertiary rounded p-5 my-3">
        <div className="row">
          <input className="col form-control m-3" placeholder="Name" value={contact.name} onChange={contactHandler} name="name"/>
          <input className="col form-control m-3" placeholder="LastName" value={contact.lastName} onChange={contactHandler} name="lastName"/>
        </div>
        <div className="row">
          <input className="col form-control mx-3" placeholder="Email" value={contact.email} onChange={contactHandler} name="email"/>
          <input className="col form-control mx-3" placeholder="Phone" value={contact.phone} onChange={contactHandler} name="phone"/>
        </div>
        <div class="d-grid gap-2">
          <button
            className="btn btn-primary my-3"
            type="submit"
            onClick={submitHandler}
          >
            Add contact
          </button>
        </div>
      </div>
      {error && <div className="btn btn-danger">Please fill all required fields!</div>}
    </form>
  );
}

export default AddContactForm;
