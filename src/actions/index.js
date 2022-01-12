import getAPI from '../services/api';

const ADD_USER = 'ADD_USER';
const GET_PRICE = 'GET_PRICE';
const PRICE_SUCCESS = 'PRICE_SUCCESS';
const PRICE_FAIL = 'PRICE_FAIL';

export const addUser = (payload) => ({ type: ADD_USER, payload });

export const getPrice = () => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return getAPI()
    .then((payload) => dispatch({ type: PRICE_SUCCESS, payload }))
    .catch((error) => dispatch({ type: PRICE_FAIL, error }));
};
