import { connect } from 'react-redux';

//  Implement sorting, filter
import CustomerDetail from './CustomerDetail';

function mapStateToProps({ customers }) {
  return {
    customer: customers,
  };
}

export default connect(mapStateToProps)(CustomerDetail);
