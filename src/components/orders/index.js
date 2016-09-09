import AllOrdersProvider from './AllOrdersProvider';
import OrderDetailProvider from './order/OrderDetailProvider';
import OrderFormProvider from './order/OrderFormProvider';

export default {
  path: 'orders',
  indexRoute: { component: AllOrdersProvider },
  childRoutes: [{
    path: 'new',
    component: OrderDetailProvider,
  }, {
    path: ':id',
    component: OrderDetailProvider,
  }, {
    path: ':order_id/edit',
    component: OrderFormProvider,
  }],
};
