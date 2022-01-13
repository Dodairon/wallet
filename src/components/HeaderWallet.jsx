import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  constructor(props) {
    super(props);

    this.calc = () => {
      const { wallet: { expenses } } = this.props;
      return expenses.reduce((acc, curr) => {
        acc += curr.value * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
    };
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <span>
          Trybe
        </span>
        <div>
          <span data-testid="email-field">{`email ${user.email}`}</span>
          <span data-testid="total-field">{`Despesa Total ${this.calc()}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

HeaderWallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
