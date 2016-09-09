import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapItems(items) {
  return items.map((item) =>
    <tr key={item.order_details_id}>
      <td>{item.product_name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.total}</td>
      <td>
        <div className="btn-group">
          <Link to={`/Products/${item.product_id}`}>
            <button className="btn btn-primary btn-flat btn-xs">View</button>
          </Link>
          <Link to={`/OrderItem/${item.order_details_id}`}>
            <button className="btn btn-success btn-flat btn-xs">Edit</button>
          </Link>
          <Link to={`/DELETE/${item.order_details_id}`}>
            <button className="btn btn-danger btn-flat btn-xs">Delete</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

const Items = ({ items }) => (
  <div className="box box-primary">
    <div className="box-header with-border">
      <h3 className="box-title">Products bought</h3>
    </div>
    <div className="box-body">
      <table className="table table-bordered table-hover no-margin">
        <tbody>
          <tr>
            <th>Product Name</th>
            <th style={{ width: '70px' }}>Price</th>
            <th style={{ width: '70px' }}>Quantity</th>
            <th style={{ width: '70px' }}>Total</th>
            <th style={{ width: '130px' }}>Actions</th>
          </tr>
          {items ? mapItems(items) : null}
        </tbody>
      </table>
    </div>
  </div>
);

Items.propTypes = {
  items: PropTypes.array,
};

export default Items;
