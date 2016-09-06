import API from '../../../config/api';
import parseJSON from '../../utils/apiCalls';

import { ORDER_FETCH_SUCCESS, ORDER_ITEMS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../../layout/flashMessages/actions';

function getItems(id) {
  return dispatch => {
    const url = `${API}orders/${id}/items`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
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
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
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

export default getOrder;
