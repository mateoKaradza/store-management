import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapOrders(orders) {
  return orders.map((order, i) =>
    <tr key={order.order_id}>
      <td>{orders.length - i}</td>
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

const Orders = ({ orders }) => (
  <div className="tab-pane active" id="orders">
    <table className="table table-bordered table-hover">
      <tbody>
        <tr>
          <th style={{ width: '50px' }}>#</th>
          <th>Platform</th>
          <th>Date</th>
          <th>Total</th>
          <th style={{ width: '70px' }}>Actions</th>
        </tr>
        {orders ? mapOrders(orders) : null}
      </tbody>
    </table>
  </div>
);

Orders.propTypes = {
  orders: PropTypes.array,
};

export default Orders;
