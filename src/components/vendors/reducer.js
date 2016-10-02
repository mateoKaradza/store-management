import { VENDORS_FETCH_SUCCESS } from './types';

export default function (state = [], action) {
  switch (action.type) {
    case VENDORS_FETCH_SUCCESS:
      return action.vendors;
    default:
      return state;
  }
}
