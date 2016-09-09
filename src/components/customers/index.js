import AllCustomersProvider from './AllCustomersProvider';
import CustomerDetailProvider from './customer/CustomerDetailProvider';
import CustomerFormProvider from './customer/CustomerFormProvider';
import OrderFormProvider from '../orders/order/OrderFormProvider';

export default {
  path: 'customers',
  indexRoute: { component: AllCustomersProvider },
  childRoutes: [{
    path: 'new',
    component: CustomerFormProvider,
  }, {
    path: ':id',
    component: CustomerDetailProvider,
  }, {
    path: ':id/edit',
    component: CustomerFormProvider,
  }, {
    path: ':customer_id/NewOrder',
    component: OrderFormProvider,
  }],
};
