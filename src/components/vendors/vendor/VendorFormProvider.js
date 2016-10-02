import { connect } from 'react-redux';

import VendorForm from './VendorForm';
import { getVendor, updateVendor } from './actions';

function mapStateToProps({ details }) {
  const { vendor } = details;
  return {
    vendor: vendor.vendor,
  };
}

export default connect(mapStateToProps, { getVendor, updateVendor })(VendorForm);
