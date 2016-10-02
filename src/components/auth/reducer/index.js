import { combineReducers } from 'redux';

import info from './user';
import isAuthenticated from './isAuthenticated';
import redirect from './redirect';

export default combineReducers({
  info,
  isAuthenticated,
  redirect,
});
