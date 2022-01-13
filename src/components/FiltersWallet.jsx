import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ACT from '../actions';
import ButtonWallet from './ButtonWallet';
import InputWallet from './InputWallet';
import SelectWallet from './selectWallet';
import getAPI from '../services/api';

class FiltersWallet extends React.Component {
  constructor(props) {
    super(props);
    this.food = 'Alimentação';
    this.state = {
      moedas: [],
      expenses: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: this.food,
      },
    };

    this.tratamentoApi = this.tratamentoApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange({ target: { value, id } }) {
    this.setState((prev) => ({
      expenses: { ...prev.expenses, [id]: value },
    }));
  }

  handleClick() {
    const { addExpenses } = this.props;
    const { expenses: { tag, method, currency, value, description } } = this.state;
    getAPI().then((data) => {
      addExpenses({
        tag,
        method,
        currency,
        value,
        description,
        exchangeRates: data,
      });
    }).then(() => {
      this.setState(() => ({
        expenses: {
          value: '0',
          description: '',
          currency: 'USD',
          method: 'Dinheiro',
          tag: this.food,
        },
      }));
    });
  }

  render() {
    const { moedas, expenses: {
      tag, method, currency, value, description } } = this.state;
    return (
      <div>
        <InputWallet
          id="value"
          value={ value }
          label="Valor"
          type="number"
          dataTestid="value-input"
          handleChange={ this.handleChange }
        />
        <SelectWallet
          id="currency"
          value={ currency }
          label="Moeda"
          valluesArray={ moedas }
          dataTestid="currency-input"
          handleChange={ this.handleChange }
        />
        <SelectWallet
          id="method"
          value={ method }
          label="Método de Pagamento"
          valluesArray={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          dataTestid="method-input"
          handleChange={ this.handleChange }
        />
        <SelectWallet
          id="tag"
          value={ tag }
          label="Tag"
          valluesArray={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          dataTestid="tag-input"
          handleChange={ this.handleChange }
        />
        <InputWallet
          id="description"
          value={ description }
          label="Descrição"
          type="text"
          dataTestid="description-input"
          handleChange={ this.handleChange }
        />
        <ButtonWallet
          text="Adicionar despesa"
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(ACT.getPrice()),
  addExpenses: (payload) => dispatch(ACT.addExpenses(payload)),
});

FiltersWallet.propTypes = {
  getPrice: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersWallet);
