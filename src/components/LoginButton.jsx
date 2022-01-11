import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class LoginButton extends React.Component {
  render() {
    const { addUser, email, buttonDisabled, history } = this.props;
    return (
      <button
        className={
          buttonDisabled ? `bg-white hover:bg-gray-10 text-gray-100font-semibold
                py-2 px-4 border border-gray-100 rounded shadow`
            : `bg-white hover:bg-gray-100 text-gray-800font-semibold
                py-2 px-4 border border-gray-400 rounded shadow`
        }
        type="button"
        disabled={ buttonDisabled }
        onClick={ () => {
          addUser(email);
          history.push('/carteira');
        } }
      >
        Entrar
      </button>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  addUser: (userInfo) => dispatch(ACT.addUser(userInfo)),
});

LoginButton.propTypes = {
  addUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
