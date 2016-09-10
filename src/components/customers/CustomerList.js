import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapCustomers(customers) {
  return customers.map(customer =>
    <tr key={customer.customer_id}>
      <td>{customer.customer_id}</td>
      <td>{customer.first_name}</td>
      <td>{customer.last_name}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td>
        <Link to={`/Customers/${customer.customer_id}`} style={{ color: 'black' }}>
          <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
        </Link>
      </td>
    </tr>
  );
}

const CustomerList = ({ data }) => (
  <table className="table table-hover">
    <tbody>
      <tr>
        <th style={{ width: '50px' }}>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Email</th>
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {data ? mapCustomers(data) : null}
    </tbody>
  </table>
);

CustomerList.propTypes = {
  data: PropTypes.array,
};

export default CustomerList;
