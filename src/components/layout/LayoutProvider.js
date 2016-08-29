import { connect } from 'react-redux';

import { logout } from '../login/actions';
import Layout from './Layout';

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { logout })(Layout);
