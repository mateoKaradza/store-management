import { combineReducers } from 'redux';
import auth from './components/login/reducer';
import flashMessages from './components/layout/flashMessages/reducer';
import customers from './components/customers/reducer';
import orders from './components/orders/reducer';
import customer from './components/customers/customer/reducer';
import order from './components/orders/order/reducer';

export const lists = combineReducers({
  customers,
  orders,
});

export const details = combineReducers({
  customer,
  order,
});

export default combineReducers({
  auth,
  flashMessages,
  lists,
  details,
});
