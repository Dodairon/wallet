import React from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends React.Component {
  render() {
    const { label, valluesArray, dataTestid } = this.props;
    return (
      <label htmlFor={ label }>
        <span>
          { label }
        </span>
        <select
          data-testid={ dataTestid }
          id={ label }
        >
          {valluesArray.map((value, index) => (
            <option key={ index }>{value}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectWallet.propTypes = {
  label: PropTypes.string.isRequired,
  valluesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default SelectWallet;
