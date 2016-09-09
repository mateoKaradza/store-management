import { browserHistory } from 'react-router';

import API from '../../../config/api';
import { parseJSON, getToken } from '../../utils/apiCalls';

import { ORDER_FETCH_SUCCESS, ORDER_ITEMS_FETCH_SUCCESS,
  PLATFORMS_FETCH_SUCCESS, RESET_ORDER_FORM } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

export function resetOrderForm() {
  return { type: RESET_ORDER_FORM };
}

export function getPlatforms() {
  return dispatch => (
    fetch(`${API}orders/platforms`, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: PLATFORMS_FETCH_SUCCESS, platforms: json });
    })
    .catch(err => (
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`))
    ))
  );
}

function getItems(id) {
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
    dispatch(getItems(id));
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

export function updateOrder(order) {
  return dispatch => {
    let url = `${API}Orders/`;
    if (order.order_id)
      url += `${order.order_id}/Edit`;
    else
      url += 'New';

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ order }),
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        dispatch(createFlashMessage('Something went wrong - Actions - Order'));
      browserHistory.replace(`/Orders/${order.order_id || json.insertId || ''}`);
    });
  };
}
