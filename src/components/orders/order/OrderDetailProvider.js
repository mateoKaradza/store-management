import { connect } from 'react-redux';

import OrderDetail from './OrderDetail';
import { getOrder } from './actions';

function mapStateToProps({ details }) {
  const { order } = details;
  return {
    order: order.order,
    items: order.items,
  };
}

export default connect(mapStateToProps, { getOrder })(OrderDetail);
