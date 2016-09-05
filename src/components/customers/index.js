import AllCustomersProvider from './AllCustomersProvider';
import CustomerDetailProvider from './customer/CustomerDetailProvider';

export default {
  path: 'customers',
  indexRoute: { component: AllCustomersProvider },
  childRoutes: [{
    path: 'new',
    component: CustomerDetailProvider,
  }, {
    path: ':id',
    component: CustomerDetailProvider,
  }],
};
