import React from 'react';
import PropTypes from 'prop-types';

class ButtonWallet extends React.Component {
  render() {
    const { text, handleClick } = this.props;
    return (
      <button
        type="button"
        onClick={ () => handleClick() }
      >
        {text}
      </button>
    );
  }
}

ButtonWallet.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonWallet;
