import { combineReducers } from 'redux';
import auth from './components/auth/reducer';
import flashMessages from './components/layout/flashMessages/reducer';

import customers from './components/customers/reducer';
import orders from './components/orders/reducer';
import products from './components/products/reducer';
import platforms from './components/platforms/reducer';
import vendors from './components/vendors/reducer';

import customer from './components/customers/customer/reducer';
import order from './components/orders/order/reducer';
import product from './components/products/product/reducer';
import vendor from './components/vendors/vendor/reducer';
import orderItem from './components/order-item/reducer';
import supply from './components/supplies/reducer';

export const lists = combineReducers({
  customers,
  orders,
  platforms,
  products,
  vendors,
});

export const details = combineReducers({
  customer,
  order,
  product,
  orderItem,
  vendor,
  supply,
});

export default combineReducers({
  auth,
  flashMessages,
  lists,
  details,
});
