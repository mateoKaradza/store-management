import { connect } from 'react-redux';

import OrderDetail from './OrderDetail';
import { loadOrder } from './actions';
import { getProducts } from '../../products/actions';
import { updateItem, addCustom, deleteItem } from '../../order-item/actions';

function mapStateToProps({ details, lists }) {
  const { order } = details;
  return {
    order: order.order,
    items: order.items,
    products: lists.products,
  };
}

export default connect(mapStateToProps,
  { loadOrder, getProducts, updateItem, addCustom, deleteItem })(OrderDetail);
