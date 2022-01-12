import React from 'react';
import ButtonWallet from './ButtonWallet';
import InputWallet from './InputWallet';
import SelectWallet from './selectWallet';
import getAPI from '../services/api';

class FiltersWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      moedas: [],
    };

    this.tratamentoApi = this.tratamentoApi.bind(this);
  }

  componentDidMount() {
    this.tratamentoApi();
  }

  tratamentoApi() {
    getAPI().then((data) => {
      delete data.USDT;
      this.setState({ moedas: Object.keys(data) });
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <div>
        <InputWallet label="Valor" type="number" dataTestid="value-input" />
        <SelectWallet label="Moeda" valluesArray={ moedas } dataTestid="currency-input" />
        <SelectWallet
          label="Valor"
          valluesArray={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          dataTestid="method-input"
        />
        <SelectWallet
          label="Tag"
          valluesArray={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          dataTestid="tag-input"
        />
        <InputWallet label="Descrição" type="text" dataTestid="description-input" />
        <ButtonWallet text="Adicionar despesas" />
      </div>
    );
  }
}

export default FiltersWallet;
