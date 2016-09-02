import API from '../../config/api';
import parseJSON from '../utils/apiCalls';

import { CUSTOMERS_FILTER_SUCCESS } from './types';
import { createFlashMessage } from '../layout/flashMessages/actions';

function filterSuccess(customers) {
  return { type: CUSTOMERS_FILTER_SUCCESS, customers };
}

export function filterCustomers(filter) {
  return dispatch => {
    let url = `${API}customers/`;
    if (filter !== '')
      url += `search/${filter}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
      .then(parseJSON)
      .then(({ json, status }) => {
        if (status >= 400)
          dispatch(createFlashMessage(`Something went wrong => Status: ${status}`));
        dispatch(filterSuccess(json));
      })
      .catch((err) => {
        dispatch(createFlashMessage(`Something went wrong => ${err.message}`));
      });
  };
}

export default filterCustomers;
