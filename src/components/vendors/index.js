import AllVendorsProvider from './AllVendorsProvider';
import VendorFormProvider from './vendor/VendorFormProvider';
import VendorDetailProvider from './vendor/VendorDetailProvider';

export default {
  path: 'vendors',
  indexRoute: { component: AllVendorsProvider },
  childRoutes: [{
    path: 'new',
    component: VendorFormProvider,
  }, {
    path: ':id',
    component: VendorDetailProvider,
  }, {
    path: ':id/edit',
    component: VendorFormProvider,
  }],
};
