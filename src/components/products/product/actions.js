import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils/apiCalls';

import { PRODUCT_FETCH_SUCCESS, PRODUCT_ORDERS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

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
          dispatch(createFlashMessage(`Something went wrong => Status: ${status}`));
        dispatch({ type: PRODUCT_ORDERS_FETCH_SUCCESS, orders: json });
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
        dispatch(createFlashMessage(`Something went wrong => Status: ${status}`));
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
  };
}

export function updateProduct(product) {
  return dispatch => {
    let url = `${API}products/`;
    if (product.product_id)
      url += `${product.product_id}/edit`;
    else
      url += 'new';

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ product }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        dispatch(createFlashMessage('Something went wrong.'));
      browserHistory.replace(`/Products/${product.product_id || json.insertId || ''}`);
    });
  };
}