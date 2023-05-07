import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

class ContactsList extends Component {
    render() {
      return (
        <ul>
          {this.props.filteredContacts.map((i) => (
            <ContactItem
              key={i.id}
              id={i.id}
              name={i.name}
              number={i.number}
              itemToDelete={this.props.onDeleteContact}
            />
          ))}
        </ul>);
       }
}
export default ContactsList;

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};