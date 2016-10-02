import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapSupplies(supplies) {
  return supplies.map((supply) =>
    <tr key={supply.unique_id}>
      <td>{supply.name}</td>
      <td>{supply.date_added}</td>
      <td>{supply.quantity}</td>
      <td>{supply.weight}</td>
      <td>${supply.cost}</td>
      <td>
        <Link to={`/Products/${supply.product_id}`} style={{ color: 'black' }}>
          <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
        </Link>
      </td>
    </tr>
  );
}

const Orders = ({ data }) => (
  <table className="table table-hover no-margin">
    <tbody>
      <tr>
        <th>Product Name</th>
        <th>Date</th>
        <th style={{ width: '110px' }}>Quantity</th>
        <th style={{ width: '70px' }}>Weight</th>
        <th style={{ width: '70px' }}>Cost</th>
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {data ? mapSupplies(data) : null}
    </tbody>
  </table>
);

Orders.propTypes = {
  data: PropTypes.array,
};

export default Orders;
