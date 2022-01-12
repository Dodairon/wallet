import React from 'react';
import FiltersWallet from '../components/FiltersWallet';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FiltersWallet />
      </div>
    );
  }
}

export default Wallet;
