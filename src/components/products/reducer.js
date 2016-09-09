import _ from 'lodash';
import { PRODUCTS_FETCH_SUCCESS, PRODUCT_CHANGE_STATUS } from './types';

export default function (state = [], action) {
  let obj;
  let index;
  let product;
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return action.products;
    case PRODUCT_CHANGE_STATUS:
      obj = _.cloneDeep(state);
      index = _.indexOf(obj, _.find(obj, { product_id: action.product_id }));
      product = obj[index];
      product.status = !product.status;
      obj.splice(index, 1, product);
      return obj;
    default:
      return state;
  }
}
