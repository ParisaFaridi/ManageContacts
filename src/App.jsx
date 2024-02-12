import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import "./App.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts((contacts) => [...contacts, contact]);
  };

  const deleteHandler=()=>{
    
  }
  return (
    <div className="container-fluid">
      <h2>Contact App</h2>
      <span>Parisa</span>
      <span> | React.js</span>

      <AddContactForm onContactAdded={handleAddContact} />
      <ContactList contacts={contacts} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
