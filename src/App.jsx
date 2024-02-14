import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts((contacts) => [...contacts, contact]);
  };

  const deleteHandler=(id)=>{
    const newContacts = contacts.filter((contact) => contact.id!==id)
    setContacts(newContacts)
  }

  return (
    <div >
      <Header/>
      <AddContactForm onContactAdded={handleAddContact} />
      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
