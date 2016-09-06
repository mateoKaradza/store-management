import AllOrdersProvider from './AllOrdersProvider';
import OrderDetailProvider from './order/OrderDetailProvider';

export default {
  path: 'orders',
  indexRoute: { component: AllOrdersProvider },
  childRoutes: [{
    path: 'new',
    component: OrderDetailProvider,
  }, {
    path: ':id',
    component: OrderDetailProvider,
  }],
};
