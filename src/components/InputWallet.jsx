import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { label, type, dataTestid } = this.props;
    return (
      <label htmlFor={ label }>
        <span>
          { label }
        </span>
        <input
          type={ type }
          id={ label }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

InputWallet.propTypes = {
  label: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InputWallet;
