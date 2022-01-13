const initialState = { expenses: [], currencies: {} };

const PRICE_SUCCESS = 'PRICE_SUCCESS';
const PRICE_FAIL = 'PRICE_FAIL';
const GET_PRICE = 'GET_PRICE';
const ADD_EXPENSES = 'ADD_EXPENSES';

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_PRICE:
    return { ...state };
  case PRICE_SUCCESS:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSES:
    return { ...state,
      expenses: [
        ...state.expenses, {
          id: state.expenses.length,
          ...action.payload,
        }],
    };
  case PRICE_FAIL:
    return { ...state };
  default: return state;
  }
};

export default wallet;
