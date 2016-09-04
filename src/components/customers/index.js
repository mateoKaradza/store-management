import requireAuth from '../utils/requireAuth';
import wrapper from '../utils/wrapper';
import AllCustomersProvider from './AllCustomersProvider';
import CustomerDetailProvider from './customer/CustomerDetailProvider';

export default {
  path: 'customers',
  component: requireAuth(wrapper),
  indexRoute: { component: AllCustomersProvider },
  childRoutes: [{
    path: 'new',
    component: CustomerDetailProvider,
  }, {
    path: ':id',
    component: CustomerDetailProvider,
  }],
};
