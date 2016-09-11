import { connect } from 'react-redux';

import { getProducts } from './actions';
import { changeStatus } from './product/actions';
import AllProducts from './AllProducts';

function mapStateToProps({ lists }) {
  return { products: lists.products };
}

export default connect(mapStateToProps, { getProducts, changeStatus })(AllProducts);
