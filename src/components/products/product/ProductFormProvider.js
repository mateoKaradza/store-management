import { connect } from 'react-redux';

import ProductForm from './ProductForm';
import { getProduct, updateProduct } from './actions';

function mapStateToProps({ details }) {
  const { product } = details;
  return {
    product: product.product,
  };
}

export default connect(mapStateToProps, { getProduct, updateProduct })(ProductForm);
