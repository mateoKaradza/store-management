import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapOrders(orders) {
  return orders.map((order) =>
    <tr key={order.order_details_id}>
      <td>{order.name}</td>
      <td>{order.date}</td>
      <td>${order.price}</td>
      <td>{order.quantity}</td>
      <td>${order.total}</td>
      <td>
        <Link to={`/Orders/${order.order_id}`} style={{ color: 'black' }}>
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
        <th>Platform</th>
        <th>Date</th>
        <th style={{ width: '70px' }}>Price</th>
        <th style={{ width: '70px' }}>Quantity</th>
        <th style={{ width: '110px' }}>Order Total</th>
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {data ? mapOrders(data) : null}
    </tbody>
  </table>
);

Orders.propTypes = {
  data: PropTypes.array,
};

export default Orders;
