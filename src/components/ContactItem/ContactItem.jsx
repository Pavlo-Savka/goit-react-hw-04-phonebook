import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

class ContactItem extends Component { 
    render() {
        return (
            <li key={this.props.id} className={css['contact-item']}>
                {this.props.name}: {this.props.number}
                <button className={css.itemBtn} type='button' onClick={() => this.props.itemToDelete(this.props.id)}>Delete</button>
            </li>

        );
    }
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemToDelete: PropTypes.func.isRequired
};