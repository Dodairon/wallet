import React from 'react';
import FiltersWallet from '../components/FiltersWallet';
import HeaderWallet from '../components/HeaderWallet';
import HeaderTableWallet from '../components/HeaderTableWallet';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FiltersWallet />
        <HeaderTableWallet />
        <TableWallet />
      </div>
    );
  }
}

export default Wallet;
