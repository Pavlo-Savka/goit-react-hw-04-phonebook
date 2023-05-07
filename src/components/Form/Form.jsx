import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => 
    this.setState({
    name: '',
    number: '',
  })
  
  render() {
    return (
      <form
        action="addContact"
        name="addContact"
        className={css['contact-form']}
        onSubmit={this.handleSubmit}
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
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={css["phonebook__button"]} type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};