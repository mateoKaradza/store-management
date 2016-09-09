import { ORDER_ITEM_FETCH_SUCCESS } from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case ORDER_ITEM_FETCH_SUCCESS:
      return action.item;
    default:
      return state;
  }
}
