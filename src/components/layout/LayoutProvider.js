import { connect } from 'react-redux';

import { logout } from '../login/actions';
import Layout from './Layout';

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { logout })(Layout);
