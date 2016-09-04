import { connect } from 'react-redux';

//  Implement sorting, filter
import { filterCustomers } from './actions';
import AllCustomers from './AllCustomers';

function mapStateToProps({ lists }) {
  return { customers: lists.customers };
}

export default connect(mapStateToProps, { filter: filterCustomers })(AllCustomers);
