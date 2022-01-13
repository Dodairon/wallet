import React from 'react';
import FiltersWallet from '../components/FiltersWallet';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FiltersWallet />
        <TableWallet />
      </div>
    );
  }
}

export default Wallet;
