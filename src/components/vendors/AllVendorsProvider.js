import { connect } from 'react-redux';

import { getVendors } from './actions';
import AllVendors from './AllVendors';

function mapStateToProps({ lists }) {
  return { vendors: lists.vendors };
}

export default connect(mapStateToProps, { getVendors })(AllVendors);
