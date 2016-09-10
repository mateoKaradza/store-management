import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapItems(items) {
  return items.map((item) =>
    <tr key={item.order_details_id}>
      <td>{item.product_name}</td>
      <td>{item.date}</td>
      <td>{item.quantity}</td>
      <td>
        <Link to={`/Orders/${item.order_id}`} style={{ color: 'black' }}>
          <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
        </Link>
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
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {data ? mapItems(data) : null}
    </tbody>
  </table>
);

Items.propTypes = {
  data: PropTypes.array,
};

export default Items;
