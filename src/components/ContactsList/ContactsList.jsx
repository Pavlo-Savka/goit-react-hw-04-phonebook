import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

function ContactsList(props) {
      return (
        <ul>
          {props.filteredContacts.map((i) => (
            <ContactItem
              key={i.id}
              id={i.id}
              name={i.name}
              number={i.number}
              itemToDelete={props.onDeleteContact}
            />
          ))}
        </ul>);
       }

export default ContactsList;

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};