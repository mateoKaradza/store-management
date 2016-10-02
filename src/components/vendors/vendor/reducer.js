import { combineReducers } from 'redux';
import { VENDOR_FETCH_SUCCESS, SUPPLIES_FETCH_SUCCESS } from './types';

function vendor(state = {}, action) {
  switch (action.type) {
    case VENDOR_FETCH_SUCCESS:
      return action.vendor;
    default:
      return state;
  }
}

function supplies(state = [], action) {
  switch (action.type) {
    case SUPPLIES_FETCH_SUCCESS:
      return action.supplies;
    default:
      return state;
  }
}

export default combineReducers({
  vendor,
  supplies,
});
