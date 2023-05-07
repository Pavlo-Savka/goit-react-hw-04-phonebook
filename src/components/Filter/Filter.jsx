import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    
    render() {
        return (
    <div className='filter'>
        <p>Find contacts by name</p>
        <input
          name="filter"
          value={this.props.filterValue}
          onChange={this.props.onFilterInput}>      
          </input>
        </div>    
        )
    }
}
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired
};