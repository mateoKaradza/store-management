import { connect } from 'react-redux';

import CustomerForm from './CustomerForm';
import { getCustomer, updateCustomer } from './actions';

function mapStateToProps({ details }) {
  const { customer } = details;
  return {
    customer: customer.customer,
  };
}

export default connect(mapStateToProps, { getCustomer, updateCustomer })(CustomerForm);
