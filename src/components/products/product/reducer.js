import { combineReducers } from 'redux';
import _ from 'lodash';
import { PRODUCT_FETCH_SUCCESS, PRODUCT_ORDERS_FETCH_SUCCESS } from './types';
import { PRODUCT_CHANGE_STATUS } from '../types';

function product(state = {}, action) {
  let obj = {};
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return action.product;
    case PRODUCT_CHANGE_STATUS:
      obj = _.cloneDeep(state);
      obj.status = !obj.status;
      return obj;
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
