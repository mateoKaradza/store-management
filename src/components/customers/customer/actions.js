import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils/apiCalls';

import { CUSTOMER_FETCH_SUCCESS, CUSTOMER_ORDERS_FETCH_SUCCESS,
    CUSTOMER_ITEMS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

function getOrders(id) {
  return dispatch => {
    const url = `${API}customers/${id}/orders`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: CUSTOMER_ORDERS_FETCH_SUCCESS, orders: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

function getItems(id) {
  return dispatch => {
    const url = `${API}customers/${id}/items`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: CUSTOMER_ITEMS_FETCH_SUCCESS, items: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export function getCustomer(id) {
  return dispatch => {
    const url = `${API}customers/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: CUSTOMER_FETCH_SUCCESS, customer: json[0] });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function loadCustomer(id) {
  return dispatch => {
    dispatch(getOrders(id));
    dispatch(getItems(id));
    dispatch(getCustomer(id));
  };
}

export function updateCustomer(customer) {
  return dispatch => {
    let url = `${API}customers/`;
    if (customer.customer_id)
      url += `${customer.customer_id}/edit`;
    else url += 'new';

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ customer }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      browserHistory.replace(`/Customers/${customer.customer_id || json.insertId || ''}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
