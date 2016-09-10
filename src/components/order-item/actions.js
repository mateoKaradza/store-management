import { browserHistory } from 'react-router';

import API from '../../config/api';
import { parseJSON, getToken } from '../utils/apiCalls';

import { ORDER_ITEM_FETCH_SUCCESS } from './types';
import { getItems } from '../orders/order/actions';
import { createFlashMessage } from '../layout/flashMessages/actions';

export function getOrderItem(id) {
  return dispatch => {
    const url = `${API}orderItems/${id}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
    .then(parseJSON)
    .then(({ json, status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch({ type: ORDER_ITEM_FETCH_SUCCESS, item: json[0] });
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function updateItem(item) {
  return dispatch => {
    let url = `${API}orderItems/`;
    if (item.order_details_id)
      url += `${item.order_details_id}/edit`;
    else url += 'new';

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ item }),
    })
    .then(parseJSON)
    .then(({ status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch(getItems(item.order_id));
      browserHistory.replace(`/Orders/${item.order_id}`);
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}

export function deleteItem(item) {
  return dispatch => {
    const url = `${API}orderItems/${item.order_details_id}/delete`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken(),
      },
      body: JSON.stringify({ item }),
    })
    .then(parseJSON)
    .then(({ status }) => {
      if (status >= 400)
        throw new Error(`Status: ${status}`);
      dispatch(getItems(item.order_id));
    })
    .catch((err) => {
      dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
    });
  };
}
