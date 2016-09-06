import { connect } from 'react-redux';

import { getOrders } from './actions';
import AllOrders from './AllOrders';

function mapStateToProps({ lists }) {
  return { orders: lists.orders };
}

export default connect(mapStateToProps, { getOrders })(AllOrders);
