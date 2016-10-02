import { browserHistory } from 'react-router';

import API from '../../config/api';
import { parseJSON, getToken } from '../utils';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REDIRECTING, SET_REDIRECT } from './types';

import { createFlashMessage, deleteFlashMessage } from '../layout/flashMessages/actions';

function redirect(url) {
  browserHistory.replace(url);
}

export function setRedirect(location) {
  redirect('/login');
  return { type: SET_REDIRECT, location };
}

export function logout() {
  localStorage.removeItem('token');
  return { type: LOGOUT_SUCCESS };
}

export function dismissRedirect(location) {
  redirect(location);
  return { type: REDIRECTING };
}

function loginSuccess(user) {
  localStorage.setItem('token', user.token);
  return { type: LOGIN_SUCCESS, user };
}

function loginError(message) {
  localStorage.removeItem('token');
  return createFlashMessage(message, 'login');
}

export function login(username, password, url) {
  return dispatch => {
    fetch(`${API}users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(parseJSON)
    .then(({ status, json }) => {
      if (status >= 400)
        throw new Error(json.err);
      dispatch(loginSuccess(json));
      dispatch(deleteFlashMessage('login'));
      return redirect(url || '/');
    })
    .catch((err) => {
      dispatch(loginError(`Failed to login => ${err.message}`));
    });
  };
}

export function loadUserFromLocalStorage() {
  return dispatch => {
    fetch(`${API}users/verify`, {
      method: 'GET',
      headers: {
        'x-access-token': getToken(),
      },
    })
    .then(parseJSON)
    .then(({ status, json }) => {
      if (status >= 400)
        throw new Error(json.err);
      return dispatch(loginSuccess(json));
    })
    .catch(() => {
      dispatch(loginError('Failed to load user'));
    });
  };
}
