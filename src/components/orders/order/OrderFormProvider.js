import { connect } from 'react-redux';

import OrderForm from './OrderForm';
import { getOrder, updateOrder, getPlatforms, resetOrderForm } from './actions';

function mapStateToProps({ details, lists }) {
  const { order } = details;
  return {
    order: order.order,
    platforms: lists.platforms,
  };
}

export default connect(mapStateToProps,
  { getOrder, updateOrder, getPlatforms, resetOrderForm })(OrderForm);