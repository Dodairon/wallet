// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = { email: '' };
const ADD_USER = 'ADD_USER';

const user = (state = initialState, { payload, type }) => {
  switch (type) {
  case ADD_USER:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default user;
