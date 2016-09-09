import OrderItemFormProvider from './OrderItemFormProvider';

export default {
  path: 'OrderItem',
  childRoutes: [{
    path: 'new',
    component: OrderItemFormProvider,
  }, {
    path: ':id',
    component: OrderItemFormProvider,
  }],
};
