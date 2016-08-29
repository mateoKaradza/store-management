import _ from 'lodash';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR } from '../../components/login/constants';

// define user properties

export default function (state = {}, action) {
  let obj = {};
  switch (action.type) {
    case LOGIN_SUCCESS:
      obj = _.cloneDeep(action.user);
      return obj;
    case LOGOUT_SUCCESS:
      return {};
    case LOGIN_ERROR:
      obj.err = action.err;
      return obj;
    default:
      return state;
  }
}
