import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]
 );

  const formSubmitHandler = (data) => {
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameExists) {
      alert(data.name + " is already in contacts")
      return;
    } else {
      const newContact = ({
        ...data, 'id': nanoid(),
      })
      setContacts([...contacts, newContact]);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.currentTarget.value);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <section className='phonebook'>
        <h1>Phonebook</h1>
        <Form
          onSubmit={formSubmitHandler} />
      </section>

      <section className='contacts'>
        <h2>Contacts</h2>
        <Filter
          onFilterInput={handleFilterChange}
          filterValue={filter}
        />
        <ContactsList
          filteredContacts={filteredContacts}
          onDeleteContact={handleDelete}
        />
      </section>
    </main>
  );
};

export default App;