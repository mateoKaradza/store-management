import _ from 'lodash';
import { PRODUCTS_FETCH_SUCCESS, PRODUCTS_SORT } from './types';
import { PRODUCT_CHANGE_STATUS } from './product/types';

export default function (state = [], action) {
  let obj;
  let index;
  let product;
  let array;
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return action.products;
    case PRODUCT_CHANGE_STATUS:
      obj = _.cloneDeep(state);
      index = _.indexOf(obj, _.find(obj, { product_id: action.product_id }));
      if (index === -1)
        return state;
      product = obj[index];
      product.status = !product.status;
      obj.splice(index, 1, product);
      return obj;
    case PRODUCTS_SORT:
      array = _.sortBy(state, action.field);
      if (action.reverse)
        return _.reverse(array);
      return array;
    default:
      return state;
  }
}
