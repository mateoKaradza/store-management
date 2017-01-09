import SupplyFormProvider from './SupplyFormProvider';

export default {
  path: 'Supplies',
  childRoutes: [{
    path: 'new',
    component: SupplyFormProvider,
  }, {
    path: ':id',
    component: SupplyFormProvider,
  }],
};
