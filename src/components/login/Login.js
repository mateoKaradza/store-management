import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';
import AlertDanger from '../shared/AlertDanger';

const Login = ({ login, redirect, err }) => (
  <div>
    <h1>Moonrise Crystals - Login</h1>
    {err && <AlertDanger err={err} />}
    <LoginForm login={login} redirect={redirect} err={err} />
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  err: PropTypes.string,
};

export default Login;
