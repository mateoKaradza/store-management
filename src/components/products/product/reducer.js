import { combineReducers } from 'redux';
import { PRODUCT_FETCH_SUCCESS, PRODUCT_ORDERS_FETCH_SUCCESS } from './types';

function product(state = {}, action) {
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return action.product;
    default:
      return state;
  }
}

function orders(state = [], action) {
  switch (action.type) {
    case PRODUCT_ORDERS_FETCH_SUCCESS:
      return action.orders;
    default:
      return state;
  }
}

export default combineReducers({
  product,
  orders,
});
