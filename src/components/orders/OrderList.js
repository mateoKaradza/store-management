import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapOrders(orders) {
  return orders.map(order =>
    <tr key={order.order_id}>
      <td>{order.order_id}</td>
      <td>{order.name}</td>
      <td>{order.username}</td>
      <td>{order.first_name}</td>
      <td>{order.last_name}</td>
      <td>{order.date}</td>
      <td>{order.total}</td>
      <td>
        <Link to={`/Orders/${order.order_id}`}>
          <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
        </Link>
      </td>
    </tr>
  );
}

const OrderList = ({ data }) => (
  <table className="table table-hover">
    <tbody>
      <tr>
        <th style={{ width: '50px' }}>#</th>
        <th style={{ width: '80px' }}>Platform</th>
        <th>Username</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th style={{ width: '90px' }}>Date</th>
        <th style={{ width: '65px' }}>Total</th>
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {data ? mapOrders(data) : null}
    </tbody>
  </table>
);

OrderList.propTypes = {
  data: PropTypes.array,
};

export default OrderList;
