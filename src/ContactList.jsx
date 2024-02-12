import React, { useState } from "react";
import "./ContactList.css";
import Contact from "./Contact";

function ContactList(props) {
  
  const onDeleteHandler=()=>{
props.onDelete()
  }

  return (
    <>
      {props.contacts.length < 1 ? (
        <div className="container-fluid card p-5 my-3 no-contact">
          No Contacts Yet!
        </div>
      ) : (
        <div className="container-fluid card p-5 my-3">
          {props.contacts.map((contact, index) => (
            <Contact value={contact} key={index} onDelete={onDeleteHandler}/>
          ))}
        </div>
      )}
    </>
  );
}

export default ContactList;
