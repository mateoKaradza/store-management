import { combineReducers } from 'redux';
import { ORDER_FETCH_SUCCESS, ORDER_ITEMS_FETCH_SUCCESS } from './types';

function order(state = {}, action) {
  switch (action.type) {
    case ORDER_FETCH_SUCCESS:
      return action.order;
    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case ORDER_ITEMS_FETCH_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export default combineReducers({
  order,
  items,
});
