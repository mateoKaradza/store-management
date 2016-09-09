import API from '../../config/api';
import { parseJSON, getToken } from '../utils/apiCalls';

import { PRODUCTS_FETCH_SUCCESS, PRODUCT_CHANGE_STATUS } from './types';
import { createFlashMessage } from '../layout/flashMessages/actions';

export function getProducts(filter) {
  return dispatch => {
    let url = `${API}products/`;

    if (filter)
      url += `search/${filter}`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: PRODUCTS_FETCH_SUCCESS, products: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export function changeStatus(id) {
  return dispatch => {
    const url = `${API}products/${id}/status`;
    return fetch(url, {
      method: 'POST',
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
