import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapOrders(orders) {
  return orders.map((order) =>
    <tr key={order.order_id}>
      <td>{order.order_id}</td>
      <td>{order.name}</td>
      <td>{order.date}</td>
      <td>{order.total}</td>
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
        <th style={{ width: '50px' }}>#</th>
        <th>Platform</th>
        <th>Date</th>
        <th>Total</th>
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
