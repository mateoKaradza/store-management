import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils';

import { VENDOR_FETCH_SUCCESS, SUPPLIES_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

function getSupplies(id) {
  return dispatch => {
    const url = `${API}vendors/${id}/supplies`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: SUPPLIES_FETCH_SUCCESS, supplies: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export function getVendor(id) {
  return dispatch => {
    const url = `${API}vendors/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: VENDOR_FETCH_SUCCESS, vendor: json[0] });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function loadVendor(id) {
  return dispatch => {
    dispatch(getSupplies(id));
    dispatch(getVendor(id));
  };
}

export function updateVendor(vendor) {
  return dispatch => {
    let url = `${API}vendors/`;
    let method = 'POST';
    if (vendor.vendor_id) {
      url += vendor.vendor_id;
      method = 'PATCH';
    }

    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ vendor }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      browserHistory.replace(`/Vendors/${vendor.vendor_id || json.insertId || ''}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
