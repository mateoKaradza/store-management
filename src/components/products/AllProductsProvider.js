import { connect } from 'react-redux';

import { getProducts, changeStatus } from './actions';
import AllProducts from './AllProducts';

function mapStateToProps({ lists }) {
  return { products: lists.products };
}

export default connect(mapStateToProps, { getProducts, changeStatus })(AllProducts);
