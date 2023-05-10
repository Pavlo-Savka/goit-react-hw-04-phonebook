import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
        return (
    <div className='filter'>
        <p>Find contacts by name</p>
        <input
          name="filter"
          value={props.filterValue}
          onChange={props.onFilterInput}>      
          </input>
        </div>    
        )
    }
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired
};