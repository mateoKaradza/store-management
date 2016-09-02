import { combineReducers } from 'redux';
import auth from './components/login/reducer';
import flashMessages from './components/layout/flashMessages/reducer';
import customers from './components/customers/reducer';

export const collections = combineReducers({
  customers,
});

export default combineReducers({
  auth,
  flashMessages,
  collections,
});
