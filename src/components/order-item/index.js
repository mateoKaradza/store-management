import OrderItemFormProvider from './OrderItemFormProvider';

export default {
  path: 'OrderItems',
  childRoutes: [{
    path: 'new',
    component: OrderItemFormProvider,
  }, {
    path: ':id',
    component: OrderItemFormProvider,
  }],
};
