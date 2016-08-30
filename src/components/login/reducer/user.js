import _ from 'lodash';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../types';

// define user properties

export default function (state = {}, action) {
  let obj = {};
  switch (action.type) {
    case LOGIN_SUCCESS:
      obj = _.cloneDeep(action.user);
      return obj;
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
