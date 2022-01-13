import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { id, label, type, dataTestid, value, handleChange } = this.props;
    return (
      <label htmlFor={ label }>
        <span>
          { label }
        </span>
        <input
          value={ value }
          type={ type }
          id={ id }
          data-testid={ dataTestid }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

InputWallet.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputWallet;
