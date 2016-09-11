import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapItems(items) {
  return items.map((item) =>
    <tr key={item.order_details_id}>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.quantity}</td>
      <td>
        <div className="btn-group">
          <Link to={`/OrderItems/${item.order_details_id}`}>
            <button className="btn btn-success btn-flat btn-xs margin-r-5">Edit</button>
          </Link>
          <Link to={`/Orders/${item.order_id}`}>
            <button className="btn btn-primary btn-flat btn-xs margin-r-5">View Order</button>
          </Link>
          <Link to={`/Products/${item.product_id}`}>
            <button className="btn btn-primary btn-flat btn-xs margin-r-5">View Product</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

const Items = ({ data }) => (
  <table className="table table-hover no-margin">
    <tbody>
      <tr>
        <th>Product Name</th>
        <th>Date</th>
        <th style={{ width: '90px' }}>Quantity</th>
        <th style={{ width: '210px' }}>Actions</th>
      </tr>
      {data ? mapItems(data) : null}
    </tbody>
  </table>
);

Items.propTypes = {
  data: PropTypes.array,
};

export default Items;
