import { combineReducers } from 'redux';
import auth from './components/login/reducer';
import flashMessages from './components/layout/flashMessages/reducer';

export default combineReducers({
  auth,
  flashMessages,
});
