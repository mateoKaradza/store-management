import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Items extends Component {
  constructor(props) {
    super(props);

    this.mapItems = this.mapItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(item) {
    const data = {
      order_details_id: item.order_details_id,
      product_id: item.product_id,
      order_id: item.order_id,
      quantity: item.quantity,
    };
    this.props.deleteItem(data);
  }
  mapItems(items) {
    return items.map((item) =>
      <tr key={item.order_details_id}>
        <td>{item.product_name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.total}</td>
        <td>
          <div className="btn-group">
            <Link to={`/Products/${item.product_id}`}>
              <button className="btn btn-primary btn-flat btn-xs margin-r-5">View</button>
            </Link>
            <Link to={`/OrderItem/${item.order_details_id}`}>
              <button className="btn btn-success btn-flat btn-xs margin-r-5">Edit</button>
            </Link>
            <button
              className="btn btn-danger btn-flat btn-xs margin-r-5"
              style={{ marginTop: '1px' }}
              onClick={() => this.deleteItem(item)}
            >Delete</button>
          </div>
        </td>
      </tr>
    );
  }
  render() {
    const { data } = this.props;
    return (
      <table className="table table-hover no-margin">
        <tbody>
          <tr>
            <th>Product Name</th>
            <th style={{ width: '70px' }}>Price</th>
            <th style={{ width: '70px' }}>Quantity</th>
            <th style={{ width: '70px' }}>Total</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
          {data ? this.mapItems(data) : null}
        </tbody>
      </table>
    );
  }
}

Items.propTypes = {
  data: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default Items;
