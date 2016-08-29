import { combineReducers } from 'redux';

import user from './user';
import isAuthenticated from './isAuthenticated';
import redirect from './redirect';

export default combineReducers({
  user,
  isAuthenticated,
  redirect,
});
