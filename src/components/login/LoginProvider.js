import { connect } from 'react-redux';

import { login } from './actions';
import Login from './Login';

function mapStateToProps({ auth }) {
  return {
    redirect: auth.redirect,
  };
}

export default connect(mapStateToProps, { login })(Login);
