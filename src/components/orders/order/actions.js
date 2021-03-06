import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils';

import { ORDER_FETCH_SUCCESS, ORDER_ITEMS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

export function getItems(id) {
  return dispatch => {
    const url = `${API}orders/${id}/items`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: ORDER_ITEMS_FETCH_SUCCESS, items: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export function getOrder(id) {
  return dispatch => {
    const url = `${API}orders/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: ORDER_FETCH_SUCCESS, order: json[0] });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function loadOrder(id) {
  return dispatch => {
    dispatch(getOrder(id));
    dispatch(getItems(id));
  };
}

export function updateOrder(order) {
  return dispatch => {
    let url = `${API}orders/`;
    let method = 'POST';
    if (order.order_id) {
      url += order.order_id;
      method = 'PATCH';
    }

    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ order }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      browserHistory.replace(`/Orders/${order.order_id || json.insertId || ''}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
