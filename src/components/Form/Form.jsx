import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'

function Form(props) {
  const [phoneBookForm, setPhoneBookForm] = useState({ name: '', number:''});
 
 const handleInputChange = event => {
   setPhoneBookForm({ [event.currentTarget.name]: event.currentTarget.value });
  };
 const handleSubmit = event => {
    event.preventDefault();
   props.onSubmit(phoneBookForm);
    reset();
  };
 const reset = () => 
   setPhoneBookForm({
    name: '',
    number: '',
  })
  
    return (
      <form
        action="addContact"
        name="addContact"
        className={css['contact-form']}
        onSubmit={handleSubmit}
      >
        <label className={css["phonebook__label"]}>
          <span className={css["phonebook__name"]}>Name</span>
          <input
            className="phonebook__input-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={phoneBookForm.name}
            onChange={handleInputChange}
          />
        </label>

        <label className={css["phonebook__label"]}>
          <span className={css["phonebook__name"]}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phoneBookForm.number}
            onChange={handleInputChange}
          />
        </label>
        <button className={css["phonebook__button"]} type="submit">Add contact</button>
      </form>
    );
  }

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};