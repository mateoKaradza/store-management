import { combineReducers } from 'redux';
import auth from './components/login/reducer';
import flashMessages from './components/layout/flashMessages/reducer';
import customers from './components/customers/reducer';
import orders from './components/orders/reducer';
import products from './components/products/reducer';
import customer from './components/customers/customer/reducer';
import order from './components/orders/order/reducer';
import product from './components/products/product/reducer';
import platforms from './components/orders/platformsReducer';

export const lists = combineReducers({
  customers,
  orders,
  platforms,
  products,
});

export const details = combineReducers({
  customer,
  order,
  product,
});

export default combineReducers({
  auth,
  flashMessages,
  lists,
  details,
});
