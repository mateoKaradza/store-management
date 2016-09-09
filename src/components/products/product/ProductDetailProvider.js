import { connect } from 'react-redux';

import ProductDetail from './ProductDetail';
import { loadProduct } from './actions';

function mapStateToProps({ details }) {
  const { product } = details;
  return {
    product: product.product,
    orders: product.orders,
  };
}

export default connect(mapStateToProps, { loadProduct })(ProductDetail);