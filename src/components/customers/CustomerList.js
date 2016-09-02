import React, { PropTypes } from 'react';

import CustomerListItem from './CustomerListItem';

function mapCustomers(customers) {
  return customers.map(customer =>
    <CustomerListItem customer={customer} key={customer.customer_id} />
  );
}

const CustomerList = ({ customers }) => (
  <div>
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers ? mapCustomers(customers) : null}
      </tbody>
    </table>
  </div>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerList;
