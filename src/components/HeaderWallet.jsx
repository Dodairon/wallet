import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { user } = this.props;
    const despesa = 0;
    return (
      <div>
        <span>
          Trybe
        </span>
        <div>
          <span data-testid="email-field">{`email ${user.email}`}</span>
          <span data-testid="total-field">{`Despesa Total ${despesa}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

HeaderWallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
