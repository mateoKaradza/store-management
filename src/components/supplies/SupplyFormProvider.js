import { connect } from 'react-redux';

import SupplyForm from './SupplyForm';
import { updateSupply, getSupply } from './actions';

function mapStateToProps({ details }) {
  const { supply } = details;
  return { supply };
}

export default connect(mapStateToProps, { updateSupply, getSupply })(SupplyForm);
