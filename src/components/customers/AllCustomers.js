import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Search from '../shared/Search';
import CustomerList from './CustomerList';

const AllCustomers = ({ customers, filter }) => (
  <div>
    <h1>All Customers</h1>
    <div className="row p-b-1">
      <div className="col-md-8">
        <Search action={filter} />
      </div>
      <div className="col-md-4">
        <div className="pull-xs-right">
          <Link to="/Customers/New">
            <button className="btn btn-secondary">
              <i className="fa fa-plus m-r-1" />New customer
            </button>
          </Link>
        </div>
      </div>
    </div>
    <CustomerList customers={customers} />
  </div>
);

AllCustomers.propTypes = {
  customers: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};

export default AllCustomers;
