import React, { PropTypes } from 'react';
import FlashMessageProvider from '../layout/flashMessages/FlashMessageProvider';
import LoginForm from './LoginForm';

const Login = ({ login, redirect }) => (
  <div>
    <section className="content">
      <div className="login-box">
        <FlashMessageProvider />
        <section className="login-logo">
          Moonrise Crystals Login
        </section>
        <div className="login-box-body">
          <p className="login-box-msg">Login to proceed.</p>
          <LoginForm login={login} redirect={redirect} />
        </div>
      </div>
    </section>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string,
};

export default Login;
