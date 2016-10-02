import API from '../../config/api';
import { parseJSON, getToken } from '../utils';

import { VENDORS_FETCH_SUCCESS } from './types';
import { createFlashMessage } from '../layout/flashMessages/actions';

export function getVendors(filter) {
  return dispatch => {
    let url = `${API}vendors/`;

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
        dispatch({ type: VENDORS_FETCH_SUCCESS, vendors: json });
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export default getVendors;
