import React, { PropTypes } from 'react';

const CustomerProfile = ({ customer }) => (
  <div className="p-t-1">
    <table className="table table-stripped">
      <thead className="thead thead-default">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer.first_name}</td>
          <td>{customer.last_name}</td>
          <td>{customer.username}</td>
          <td>{customer.email}</td>
          <td>{customer.customer_id}</td>
        </tr>
      </tbody>
      <thead className="thead thead-default">
        <tr>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer.phone_number}</td>
          <td>{customer.address}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>{customer.country}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

CustomerProfile.propTypes = {
  customer: PropTypes.object,
};

export default CustomerProfile;
