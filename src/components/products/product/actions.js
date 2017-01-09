import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils';

import { PRODUCT_FETCH_SUCCESS, PRODUCT_ORDERS_FETCH_SUCCESS, PRODUCT_CHANGE_STATUS, PRODUCT_SUPPLIES_FETCH_SUCCESS }
  from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

export function changeStatus(id) {
  return dispatch => {
    const url = `${API}products/${id}/status`;
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
    .then(parseJSON)
    .then(({ status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: PRODUCT_CHANGE_STATUS, product_id: id });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

function getOrders(id) {
  return dispatch => {
    const url = `${API}products/${id}/orders`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: PRODUCT_ORDERS_FETCH_SUCCESS, orders: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

function getSupplies(id) {
  return dispatch => {
    const url = `${API}products/${id}/supplies`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: PRODUCT_SUPPLIES_FETCH_SUCCESS, supplies: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export function getProduct(id) {
  return dispatch => {
    const url = `${API}products/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: PRODUCT_FETCH_SUCCESS, product: json[0] });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function loadProduct(id) {
  return dispatch => {
    dispatch(getOrders(id));
    dispatch(getProduct(id));
    dispatch(getSupplies(id));
  };
}

export function updateProduct(product) {
  return dispatch => {
    let url = `${API}products/`;
    let method = 'POST';
    if (product.product_id) {
      url += product.product_id;
      method = 'PATCH';
    }

    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ product }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      browserHistory.replace(`/Products/${product.product_id || json.insertId || ''}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
