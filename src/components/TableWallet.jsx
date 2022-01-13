import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableWallet extends React.Component {
  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <tbody>
        { expenses.map(
          (
            {
              tag,
              method,
              currency,
              value,
              description,
              exchangeRates,
            },
            index,
          ) => (
            <tr key={ index }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ Number(value * exchangeRates[currency].ask) }</td>
              <td>Real</td>
            </tr>
          ),
        ) }
      </tbody>
    );
  }
}

const mapStateToProps = (state) => (state);

TableWallet.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(TableWallet);
