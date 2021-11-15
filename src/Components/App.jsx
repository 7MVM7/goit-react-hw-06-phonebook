// import React, { useState, useEffect } from "react";

import ContactsForm from "./ContactsForm/ContactsForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
// import data from "./data";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contacts")) ?? data;
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  

  // const changeFilterInput = (e) => {
  //   setFilter(e.target.value);
  // };

  // const onFilteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm/>

      <h2>Contacts</h2>
      <Filter />
      <ContactsList/>
    </div>
  );
}
