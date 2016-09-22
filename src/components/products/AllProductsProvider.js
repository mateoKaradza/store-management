import { connect } from 'react-redux';

import { getProducts, sortBy } from './actions';
import { changeStatus } from './product/actions';
import AllProducts from './AllProducts';

function mapStateToProps({ lists }) {
  return { products: lists.products };
}

export default connect(mapStateToProps, { getProducts, sortBy, changeStatus })(AllProducts);
