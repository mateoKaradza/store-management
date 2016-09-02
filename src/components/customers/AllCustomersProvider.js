import { connect } from 'react-redux';

//  Implement sorting, filter
import filterCustomers from './actions';
import AllCustomers from './AllCustomers';

function mapStateToProps({ customers }) {
  return { customers: customers.customers };
}

export default connect(mapStateToProps, { filter: filterCustomers })(AllCustomers);
