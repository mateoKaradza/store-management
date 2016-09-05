import React, { PropTypes } from 'react';

import CustomerListItem from './CustomerListItem';

function mapCustomers(customers) {
  return customers.map(customer =>
    <CustomerListItem customer={customer} key={customer.customer_id} />
  );
}

const CustomerList = ({ customers }) => (
  <table className="table table-bordered table-hover">
    <tbody>
      <tr>
        <th style={{ width: '50px' }}>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Email</th>
        <th style={{ width: '70px' }}>Actions</th>
      </tr>
      {customers ? mapCustomers(customers) : null}
    </tbody>
  </table>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerList;
