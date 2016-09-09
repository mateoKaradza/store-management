import { connect } from 'react-redux';

import CustomerDetail from './CustomerDetail';
import { loadCustomer } from './actions';

function mapStateToProps({ details }) {
  const { customer } = details;
  return {
    customer: customer.customer,
    orders: customer.orders,
    items: customer.items,
  };
}

export default connect(mapStateToProps, { loadCustomer })(CustomerDetail);
