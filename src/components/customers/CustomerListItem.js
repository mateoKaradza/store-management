import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CustomerListItem = ({ customer }) => (
  <tr>
    <td>{customer.customer_id}</td>
    <td>{customer.first_name}</td>
    <td>{customer.last_name}</td>
    <td>{customer.username}</td>
    <td>{customer.email}</td>
    <td>
      <Link to={`/Customers/${customer.customer_id}`} className="btn btn-secondary btn-sm m-r-1">
        <i className="fa fa-eye" />
      </Link>
    </td>
  </tr>
);

CustomerListItem.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default CustomerListItem;
