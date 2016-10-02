import API from '../../config/api';
import { parseJSON, getToken } from '../utils';

import { createFlashMessage } from '../layout/flashMessages/actions';
import { PLATFORMS_FETCH_SUCCESS } from './types';

export function getPlatforms() {
  return dispatch => (
    fetch(`${API}platforms`, {
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

export default getPlatforms;
