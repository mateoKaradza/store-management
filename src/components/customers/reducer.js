import { CUSTOMERS_FILTER_SUCCESS } from './types';

export default function (state = [], action) {
  switch (action.type) {
    case CUSTOMERS_FILTER_SUCCESS:
      return action.customers;
    default:
      return state;
  }
}
