import { connect } from 'react-redux';

import { login } from './actions';
import Login from './Login';

function mapStateToProps({ user }) {
  return {
    redirect: user.redirect,
    err: user.user.err,
  };
}

export default connect(mapStateToProps, { login })(Login);
