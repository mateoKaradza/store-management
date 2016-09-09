import API from '../../config/api';
import { parseJSON, getToken } from '../utils/apiCalls';

import { ORDERS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../layout/flashMessages/actions';

export function getOrders() {
  return dispatch => {
    const url = `${API}orders/`;
    return fetch(url, {
      method: 'GET',
      headers: { 'x-access-token': getToken() },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          throw new Error(`Status: ${status}`);
        dispatch({ type: ORDERS_FETCH_SUCCESS, orders: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export default getOrders;
