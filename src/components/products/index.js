import AllProductsProvider from './AllProductsProvider';
import ProductFormProvider from './product/ProductFormProvider';
import ProductDetailProvider from './product/ProductDetailProvider';

export default {
  path: 'products',
  indexRoute: { component: AllProductsProvider },
  childRoutes: [{
    path: 'new',
    component: ProductFormProvider,
  }, {
    path: ':id',
    component: ProductDetailProvider,
  }, {
    path: ':id/edit',
    component: ProductFormProvider,
  }],
};
