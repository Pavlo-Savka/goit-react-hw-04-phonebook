import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

function ContactItem(props) { 
        return (
            <li id={props.id} className={css['contact-item']}>
                {props.name}: {props.number}
                <button className={css.itemBtn} type='button' onClick={() => props.itemToDelete(props.id)}>Delete</button>
            </li>

        );
    }

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemToDelete: PropTypes.func.isRequired
};