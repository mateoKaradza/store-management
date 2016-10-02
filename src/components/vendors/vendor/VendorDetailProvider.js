import { connect } from 'react-redux';

import VendorDetail from './VendorDetail';
import { loadVendor } from './actions';

function mapStateToProps({ details }) {
  const { vendor } = details;
  return {
    vendor: vendor.vendor,
    supplies: vendor.supplies,
  };
}

export default connect(mapStateToProps, { loadVendor })(VendorDetail);
