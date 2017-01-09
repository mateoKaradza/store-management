import { SUPPLY_FETCH_SUCCESS } from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case SUPPLY_FETCH_SUCCESS:
      return action.supply;
    default:
      return state;
  }
}
