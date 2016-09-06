import { ORDERS_FETCH_SUCCESS } from './types';

export default function (state = [], action) {
  switch (action.type) {
    case ORDERS_FETCH_SUCCESS:
      return action.orders;
    default:
      return state;
  }
}
