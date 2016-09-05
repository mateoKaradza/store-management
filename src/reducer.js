import { combineReducers } from 'redux';
import auth from './components/login/reducer';
import flashMessages from './components/layout/flashMessages/reducer';
import customers from './components/customers/reducer';
import customer from './components/customers/customer/reducer';

export const lists = combineReducers({
  customers,
});

export const details = combineReducers({
  customer,
});

export default combineReducers({
  auth,
  flashMessages,
  lists,
  details,
});
