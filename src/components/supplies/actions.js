import { browserHistory } from 'react-router';

import API from '../../config/api';
import { parseJSON, getToken } from '../utils';

import { SUPPLY_FETCH_SUCCESS } from './types';
import { getSupplies } from '../vendors/vendor/actions';
import { createFlashMessage } from '../layout/flashMessages/actions';

export function getSupply(id) {
  return dispatch => {
    const url = `${API}supplies/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: SUPPLY_FETCH_SUCCESS, supply: json });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function updateSupply(supply) {
  return dispatch => {
    let url = `${API}supplies/`;
    let method = 'POST';
    if (supply.unique_id) {
      url += supply.unique_id;
      method = 'PATCH';
    }

    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ supply }),
    })
    .then(parseJSON)
    .then(({ status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      browserHistory.replace(`/Vendors/${supply.vendor_id}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function deleteSupply(supply) {
  return dispatch => {
    const url = `${API}supplies/${supply.unique_id}`;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ supply }),
    })
    .then(parseJSON)
    .then(({ status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch(getSupplies(supply.vendor_id));
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
