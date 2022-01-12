import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class ButtonWallet extends React.Component {
  render() {
    const { text, getPrice } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          getPrice();
        } }
      >
        {text}
      </button>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(ACT.getPrice()),
});

ButtonWallet.propTypes = {
  text: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonWallet);
