import { combineReducers } from 'redux';
import user from './user/index';
import flashMessages from './flashMessages';

export default combineReducers({
  user,
  flashMessages,
});
