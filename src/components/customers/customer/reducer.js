import { combineReducers } from 'redux';
import { CUSTOMER_FETCH_SUCCESS, CUSTOMER_ORDERS_FETCH_SUCCESS,
  CUSTOMER_ITEMS_FETCH_SUCCESS } from './types';

function customer(state = {}, action) {
  switch (action.type) {
    case CUSTOMER_FETCH_SUCCESS:
      return action.customer;
    default:
      return state;
  }
}

function orders(state = [], action) {
  switch (action.type) {
    case CUSTOMER_ORDERS_FETCH_SUCCESS:
      return action.orders;
    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case CUSTOMER_ITEMS_FETCH_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export default combineReducers({
  customer,
  orders,
  items,
});
