import { connect } from 'react-redux';

import OrderItemForm from './OrderItemForm';
import { updateItem, getOrderItem } from './actions';

function mapStateToProps({ details }) {
  const { orderItem } = details;
  return { orderItem };
}

export default connect(mapStateToProps, { updateItem, getOrderItem })(OrderItemForm);
