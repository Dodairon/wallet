import React from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends React.Component {
  render() {
    const { id, label, valluesArray, dataTestid, value, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        <span>
          { label }
        </span>
        <select
          value={ value }
          data-testid={ dataTestid }
          id={ id }
          onChange={ (event) => handleChange(event) }
        >
          {valluesArray.map((values, index) => (
            <option key={ index }>{values}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectWallet.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valluesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestid: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default SelectWallet;
