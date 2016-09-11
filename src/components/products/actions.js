import API from '../../config/api';
import { parseJSON, getToken } from '../utils/apiCalls';

import { PRODUCTS_FETCH_SUCCESS } from './types';
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

export default getProducts;
