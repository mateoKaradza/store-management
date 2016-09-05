import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';
import AlertDanger from '../shared/AlertDanger';

const Login = ({ login, redirect, err }) => (
  <div>
    <section className="content">
      <div className="login-box">
        <section className="login-logo">
          Moonrise Crystals Login
          {err && <AlertDanger err={err} />}
        </section>
        <div className="login-box-body">
          <p className="login-box-msg">Login to proceed.</p>
          <LoginForm login={login} redirect={redirect} err={err} />
        </div>
      </div>
    </section>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  err: PropTypes.string,
};

export default Login;
