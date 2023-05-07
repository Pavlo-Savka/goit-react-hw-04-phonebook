import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      parsedContacts.length > 0 ? this.setState({ contacts: parsedContacts }) :
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    } else {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    };
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  formSubmitHandler = (data) => {
   const nameExists = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
   );
     if (nameExists) {
       alert(data.name + " is already in contacts")
       return;
     } else {
      const newContact = ({
        ...data, 'id': nanoid(),
      })
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
   };
  };
  
  handleFilterChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <main>
        <section className='phonebook'>
          <h1>Phonebook</h1>
          <Form
            onSubmit={ this.formSubmitHandler } />
        </section>
        
        <section className='contacts'>
          <h2>Contacts</h2>
          <Filter
            onFilterInput={this.handleFilterChange}
            filterValue={this.state.filter}
          />
          <ContactsList
            filteredContacts={filteredContacts}
            onDeleteContact={this.handleDelete}
            />
        </section>
      </main>
    )
  };
};

export default App;